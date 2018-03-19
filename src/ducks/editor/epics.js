import { interval } from 'rxjs/observable/interval';
import { merge } from 'rxjs/observable/merge';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { EDITING_START, EDITING_MODEL, EDITING_END } from './types';
import { TRANSLATE_CAMERA, ROTATE_CAMERA } from '../camera/types';
import { TRANSLATE_MODEL, ROTATE_MODEL } from '../models/types';

import { translateModel, rotateModel } from '../models/actionCreators';

export const modelEditingEpic = (action$, store) =>
  action$.ofType(EDITING_START)
    .delay(1000)
    .mergeMap(editorAction =>
      {
        return merge(
          Observable.of({ 
           ...editorAction,
           type: EDITING_MODEL
          }),
          action$.ofType(ROTATE_CAMERA)
          .map((rotateAction) => {
            return rotateModel(editorAction.selectedId, editorAction.modelType, rotateAction.rotateBy);
          }),
          action$.ofType(TRANSLATE_CAMERA)
          .map((translateAction) => {
            return translateModel(editorAction.selectedId, editorAction.modelType, translateAction.translateBy);
          })
          
        )
        .takeUntil(action$.ofType(EDITING_END))
      } 
    );

export default (action$, store) => merge(
  modelEditingEpic(action$, store),
);
