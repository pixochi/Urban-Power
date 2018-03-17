import { combineEpics } from 'redux-observable';
import{ moveCameraEpic } from './camera/epic';

export default combineEpics(
  moveCameraEpic,
);