import { merge } from 'rxjs/observable/merge';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { EDITING_START, EDITING_MODEL, EDITING_END } from './types';
import { TRANSLATE_CAMERA, ROTATE_CAMERA } from '../camera/types';
import { translateModel, translateModelBy } from '../models/actionCreators';
import { stopEditing } from './actionCreators';
import { calcPositionOnRotation } from '../../utils/coordinates';
import { EDITING_MODEL_HEIGHT } from '../../constants/editor';

const EDITING_MODEL_DISTANCE = 4;
const END_EDITING_THRESHOLD = -25;

export const modelEditingEpic = (action$, store) =>
  action$.ofType(EDITING_START)
    .delay(2000)
    .mergeMap(editorAction =>
      {
        const { id, modelType } = editorAction;

        return merge(
          Observable.of({ 
           ...editorAction,
           type: EDITING_MODEL
          }),
          action$.ofType(ROTATE_CAMERA)
          .map((rotateAction) => {
            const { position, rotation } = store.getState().camera;
            if (rotation.get('x') < END_EDITING_THRESHOLD) {
              return stopEditing(id, modelType);
            }
            const nextPosition = calcPositionOnRotation(EDITING_MODEL_DISTANCE, rotation.get('y'), position, EDITING_MODEL_HEIGHT);
            return translateModel(id, modelType, nextPosition);
          }),
          action$.ofType(TRANSLATE_CAMERA)
          .map((translateAction) => {
            return translateModelBy(id, modelType, translateAction.translateBy);
          })
        )
        .takeUntil(action$.ofType(EDITING_END))
      } 
    );

export default (action$, store) => merge(
  modelEditingEpic(action$, store),
);
