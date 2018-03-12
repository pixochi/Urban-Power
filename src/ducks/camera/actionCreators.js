import * as types from './types';

export const translateBy = (coordinates) => {
  return {
    type: types.TRANSLATE_POSITION,
    coordinates
  }
}