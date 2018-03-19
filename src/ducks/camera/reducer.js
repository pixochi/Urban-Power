import { Record, Map } from 'immutable';

import * as types from './types';
import { changeCoordinatesBy, calcPositionOnRotation } from '../../utils/coordinates';

const MARKER_DISTANCE = 2;
const MARKER_HEIGHT = 2;

const CameraRecord = Record({
  position: Map({ x: 0, y: 0, z: 0 }),
  rotation: Map({ x: 0, y: 0, z: 0 }),
  moveByPoints: 0.2,
  markerPosition: Map({ x: 0, y: MARKER_HEIGHT, z: -2 })
});

const markerCenter = { x: 0, z: 0 }

const initialState = new CameraRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSLATE_CAMERA: {
      const nextPosition = changeCoordinatesBy(state.position, action.translateBy);
      return state.set('position', state.position.merge(nextPosition));
    }
    case types.ROTATE_CAMERA: {
      const nextRotation = changeCoordinatesBy(state.rotation, action.rotateBy);
      const nextMarkerPosition = calcPositionOnRotation(MARKER_DISTANCE, nextRotation.y, markerCenter, MARKER_HEIGHT);
        return state.set('rotation', state.rotation.merge(nextRotation))
          .set('markerPosition', state.markerPosition.merge(nextMarkerPosition))
    }
    default: 
      return state;
  }
}