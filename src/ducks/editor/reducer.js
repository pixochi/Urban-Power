import { Record } from 'immutable';

import * as types from './types';

const EditorRecord = Record({
  isEditing: false,
  selectedId: null
});

const initialState = new EditorRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.EDITING_START: {
      return state.set('isEditing', true).set('selectedId', action.selectedId);
    }
    case types.EDITING_END: {
      return state.set('isEditing', false).set('selectedId', null);
    }
    default: 
      return state;
  }
}