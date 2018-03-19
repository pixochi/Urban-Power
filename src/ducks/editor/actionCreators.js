import * as types from './types';

export const startEditing = (id, modelType) => {
  return {
    type: types.EDITING_START,
    id,
    modelType
  }
}

export const stopEditing = (id, modelType) => {
  return {
    type: types.EDITING_END,
    id,
    modelType
  }
}