import { combineEpics } from 'redux-observable';
import{ moveCameraEpic } from './camera/epics';
import editorEpics from './editor/epics';

export default combineEpics(
  moveCameraEpic,
  editorEpics
);