import { Map, fromJS } from 'immutable';

import * as types from './types';
import { EDITING_MODEL } from '../editor/types';
import { ROTATE_MODEL, TRANSLATE_MODEL } from '../models/types';
import { Bench, Lamp, Trashcan, Tree } from '../../components/models';
import { changeCoordinatesBy } from '../../utils/coordinates';

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
      const currentPosition = state.getIn([action.modelType, 'items', action.selectedId, 'position']);
      return state.setIn(
        [action.modelType, 'items', action.selectedId, 'position'], 
        changeCoordinatesBy(currentPosition, {y: 1})
      );
    }
    case ROTATE_MODEL: {
      const currentRotation = state.getIn([action.modelType, 'items', action.id, 'rotation']);
      return state.setIn(
        [action.modelType, 'items', action.id, 'rotation'], 
        changeCoordinatesBy(currentRotation, action.rotateBy)
      );
    }
    case TRANSLATE_MODEL: {
      const currentPosition = state.getIn([action.modelType, 'items', action.id, 'position']);
      return state.setIn(
        [action.modelType, 'items', action.id, 'position'], 
        changeCoordinatesBy(currentPosition, action.translateBy)
      );
    }
    default: 
      return state;
  }
}