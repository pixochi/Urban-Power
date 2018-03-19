import { Map, fromJS } from 'immutable';

import { EDITING_MODEL, EDITING_END } from '../editor/types';
import { ROTATE_MODEL_BY, TRANSLATE_MODEL_BY, TRANSLATE_MODEL } from './types';
import { Bench, Lamp, Trashcan, Tree } from '../../components/models';
import { changeCoordinatesBy } from '../../utils/coordinates';
import { EDITING_MODEL_HEIGHT } from '../../constants/editor';

let lamps = {};
for (let i = 0; i < 4; i++) {
  lamps[i+4] = {
    uid: i+4,
    isOn: true,
    position: `${-20+14.5*i} 0 -10`,
  }
}
lamps = fromJS(lamps);

const initialState =  Map({
  Bench: Map({
    component: Bench,
    items: Map({
      1: Map({
        uuid: 1,
        position: "2 0 2"
      })
    })
  }),
  Tree: Map({
    component: Tree,
    items: Map({
      2: Map({
        uid: 2,
        position: "4 0 4"
      })
    })
  }),
  Trashcan: Map({
    component: Trashcan,
    items: Map({
      3: Map({
        uid: 3,
        position: "4 0 4"
      })
    })
  }),
  Lamp: Map({
    component: Lamp,
    items: lamps
  }),
});

export default (state = initialState, action) => {
  switch(action.type) {
    case EDITING_MODEL: {
      const currentPosition = state.getIn(getModelProp(action, 'position'));
      return state.setIn(
        getModelProp(action, 'position'), 
        changeCoordinatesBy(currentPosition, {y: EDITING_MODEL_HEIGHT})
      );
    }
    case EDITING_END: {
      return state.setIn(
        getModelProp(action, 'position'), 
        state.getIn(getModelProp(action, 'position')).merge({y: 0})
      );
    }
    case ROTATE_MODEL_BY: {
      const currentRotation = state.getIn(getModelProp(action, 'rotation'));
      return state.setIn(
        getModelProp(action, 'rotation'), 
        changeCoordinatesBy(currentRotation, action.rotateBy)
      );
    }
    case TRANSLATE_MODEL_BY: {
      const currentPosition = state.getIn(getModelProp(action, 'position'));
      return state.setIn(
        getModelProp(action, 'position'), 
        changeCoordinatesBy(currentPosition, action.translateBy)
      );
    }
    case TRANSLATE_MODEL: {
      const currentPosition = state.getIn(getModelProp(action, 'position'));
      return state.setIn(
        getModelProp(action, 'position'), 
        action.nextPosition
      );
    }
    default: 
      return state;
  }
}

const getModelProp = (action, prop) => {
  return [action.modelType, 'items', action.id, prop]
}