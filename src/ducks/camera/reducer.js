import { Record } from 'immutable';

import * as types from './types';

const initialState = Record({
  position: null
});

export default (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSLATE_POSITION:
      return state.merge(action.coordinates);
    default: 
      return state;
  }
}