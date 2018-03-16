import { Record, Map } from 'immutable';

import * as types from './types';

const CameraRecord = Record({
  position: Map({ x: 0, y: 0, z: 0 })
});

const initialState = new CameraRecord();

export default (state = initialState, action) => {
  console.log(action.type)
  switch(action.type) {
    case types.TRANSLATE_CAMERA:
      return state.set('position', state.position.merge(action.nextPosition));
    default: 
      return state;
  }
}