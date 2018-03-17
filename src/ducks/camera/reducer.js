import { Record, Map } from 'immutable';

import * as types from './types';

const CameraRecord = Record({
  position: Map({ x: 0, y: 0, z: 0 }),
  rotation: Map({ x: 0, y: 0, z: 0 }),
  moveByPoints: 0.25
});

const initialState = new CameraRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSLATE_CAMERA:
      return state.set('position', state.position.merge(action.nextPosition));
    case types.ROTATE_CAMERA:
      return state.set('rotation', state.rotation.merge(action.nextRotation));
    default: 
      return state;
  }
}