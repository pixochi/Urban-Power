import { interval } from 'rxjs/observable/interval';
import { merge } from 'rxjs/observable/merge';

import { EDITING_START, EDITING_END } from './types';
import { TRANSLATE_CAMERA } from '../camera/types';

export const modelEditingEpic = (action$, store) =>
  action$.ofType(EDITING_START)
    .mergeMap(action =>
      action$.ofType(TRANSLATE_CAMERA)
        .map(() => {
          return {type: "TEST"}
        })
        .takeUntil(action$.ofType(EDITING_END))
    );

export default (action$, store) => merge(
  modelEditingEpic(action$, store),
);
