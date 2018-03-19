import { Record, Map } from 'immutable';

import * as types from './types';
import { changeCoordinatesBy } from '../../utils/coordinates';

const CameraRecord = Record({
  position: Map({ x: 0, y: 0, z: 0 }),
  rotation: Map({ x: 0, y: 0, z: 0 }),
  moveByPoints: 0.2
});

const initialState = new CameraRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSLATE_CAMERA: {
      const nextPosition = changeCoordinatesBy(state.position, action.translateBy);
      return state.set('position', state.position.merge(nextPosition));
    }
    case types.ROTATE_CAMERA:
    const nextRotation = changeCoordinatesBy(state.rotation, action.rotateBy);
      return state.set('rotation', state.rotation.merge(nextRotation));
    default: 
      return state;
  }
}