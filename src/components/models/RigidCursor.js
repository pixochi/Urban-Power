import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Cursor } from '../index';
import { aframeCoordinates } from '../../utils/propTypes';

export default class RigidCursor extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    onRotationChanged: PropTypes.func
  }

  static defaultProps = {
    position: '0 0 0',
    onRotationChanged: () => null
  }

  render() {
    const { position, onRotationChanged, markerPosition } = this.props;

    return (
      <Cursor
        id="navigationControl"
        position={position}
        markerPosition={markerPosition}
        onRotationChanged={onRotationChanged} 
      />
    )
  }
}