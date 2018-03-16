import React, { PureComponent } from 'react';

import { Cursor, StaticBody } from './index';
import { aframeCoordinates } from '../utils/propTypes';

export default class RigidCursor extends PureComponent {

  static propTypes = {
    position: aframeCoordinates
  }

  render() {
    const { position } = this.props;

    return (
      <StaticBody id="navigationControl">
        <Cursor position={position} />
      </StaticBody>
    )
  }
}