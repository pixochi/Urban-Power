import { Record, Map } from 'immutable';

import * as types from './types';

const CameraRecord = Record({
  position: Map({y:10})
});

const initialState = new CameraRecord();

export default (state = initialState, action) => {
  switch(action.type) {
    case types.TRANSLATE_CAMERA:
      return state.set('position', state.position.merge(action.nextPosition));
    default: 
      return state;
  }
}