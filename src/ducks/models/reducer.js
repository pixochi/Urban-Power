import { Map, fromJS } from 'immutable';

import * as types from './types';
import { Bench, Lamp, Trashcan, Tree } from '../../components/models';

let lamps = {};
for (let i = 0; i < 4; i++) {
  lamps[i] = {
    isOn: true,
    position: `${-20+14.5*i} 0 -10`
  }
}
lamps = fromJS(lamps);


const initialState =  Map({
  Bench: Map({
    component: Bench,
    items: Map({
      1: Map({
        scale: ".0008 .0006 .0008",
        position: "2 0 2"
      })
    })
  }),
  Tree: Map({
    component: Tree,
    items: Map({
      2: Map({
        position: "4 0 4"
      })
    })
  }),
  Trashcan: Map({
    component: Trashcan,
    items: Map({
      3: Map({
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
    default: 
      return state;
  }
}