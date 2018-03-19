import * as types from './types';

export const translateModelBy = (id, modelType, translateBy) => {
  return {
    type: types.TRANSLATE_MODEL_BY,
    id,
    modelType,
    translateBy
  }
}

export const translateModel = (id, modelType, nextPosition) => {
  return {
    type: types.TRANSLATE_MODEL,
    id,
    modelType,
    nextPosition
  }
}

export const rotateModelBy = (id, modelType, rotateBy) => {
  return {
    type: types.ROTATE_MODEL_BY,
    id,
    modelType,
    rotateBy
  }
}