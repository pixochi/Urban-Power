import { Record } from 'immutable';

import * as types from './types';

const EditorRecord = Record({
  isEditing: false
});

const initialState = new EditorRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.EDITING_TOGGLE: {
      return state.set('isEditing', !state.isEditing);
    }
    default: 
      return state;
  }
}