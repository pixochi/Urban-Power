import { Map, fromJS } from 'immutable';

import * as types from './types';
import { EDITING_START } from '../editor/types';
import { Bench, Lamp, Trashcan, Tree } from '../../components/models';
import { translateCoordinatesBy } from '../../utils/coordinates';

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
        scale: ".0008 .0006 .0008",
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
    case EDITING_START: {
      const currentPosition = state.getIn([action.modelType, 'items', action.selectedId, 'position']);
      return state.setIn(
        [action.modelType, 'items', action.selectedId, 'position'], 
        translateCoordinatesBy(currentPosition, {y: 1})
      );
    }
    default: 
      return state;
  }
}