import * as types from './types';

export const startEditing = () => {
  return {
    type: types.EDITING_TOGGLE
  }
}