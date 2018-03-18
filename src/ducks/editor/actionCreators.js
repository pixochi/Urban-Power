import * as types from './types';

export const startEditing = (selectedId, modelType) => {
  return {
    type: types.EDITING_START,
    selectedId,
    modelType
  }
}

export const stopEditing = () => {
  return {
    type: types.EDITING_END
  }
}