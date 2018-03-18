import { combineReducers } from 'redux';

import camera from './camera';
import editor from './editor';
import models from './models';

export default combineReducers({
  camera,
  editor,
  models
});