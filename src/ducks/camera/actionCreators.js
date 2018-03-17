import * as types from './types';
import { translateCoordinatesBy } from '../../utils/coordinates';


export const translateCameraBy = (currentCoordinates, translateBy) => {
  const nextPosition = translateCoordinatesBy(currentCoordinates, translateBy);

  return {
    type: types.TRANSLATE_CAMERA,
    nextPosition
  }
}

export const rotateCamera = (nextRotation) => {
  return {
    type: types.ROTATE_CAMERA,
    nextRotation
  }
}

export const moveCameraStart = () => {
  return { type: types.MOVE_CAMERA_START }
}

export const moveCameraEnd = () => {
  return { type: types.MOVE_CAMERA_END}
}