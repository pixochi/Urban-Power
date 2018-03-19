import * as types from './types';

export const translateCameraBy = (translateBy) => {
  return {
    type: types.TRANSLATE_CAMERA,
    translateBy
  }
}

export const rotateCamera = (rotateBy) => {
  return {
    type: types.ROTATE_CAMERA,
    rotateBy
  }
}

export const moveCameraStart = () => {
  return { type: types.MOVE_CAMERA_START }
}

export const moveCameraEnd = () => {
  return { type: types.MOVE_CAMERA_END}
}