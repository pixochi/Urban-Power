import { combineEpics } from 'redux-observable';
import cameraEpics from './camera/epics';
import editorEpics from './editor/epics';

export default combineEpics(
  cameraEpics,
  editorEpics
);