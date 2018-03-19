import { interval } from 'rxjs/observable/interval';

import { MOVE_CAMERA_START, MOVE_CAMERA_END } from './types';
import { translateCameraBy } from './actionCreators';
import { convertToRadians } from '../../utils/coordinates';

export const moveCameraEpic = (action$, store) =>
  action$.ofType(MOVE_CAMERA_START)
    .mergeMap(action =>
      interval(50)
      .delay(1000)
        .map(() => {
          const { position, rotation, moveByPoints } = store.getState().camera;
          const radians = convertToRadians(rotation.get('y'));
          const translateBy = { 
            x: -moveByPoints * Math.sin(radians),
            z: -moveByPoints * Math.cos(radians) 
          }

          return translateCameraBy(translateBy);
        })
        .takeUntil(action$.ofType(MOVE_CAMERA_END))
    );

