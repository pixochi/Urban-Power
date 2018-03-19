import * as types from './types';

export const translateModel = (id, modelType, translateBy) => {
  return {
    type: types.TRANSLATE_MODEL,
    id,
    modelType,
    translateBy
  }
}

export const rotateModel = (id, modelType, rotateBy) => {
  return {
    type: types.ROTATE_MODEL,
    id,
    modelType,
    rotateBy
  }
}