import React, { PureComponent } from 'react';
import { Cursor, StaticBody } from './index';

export default class RigidCursor extends PureComponent {
  render() {
    return (
      <StaticBody>
        <Cursor />
      </StaticBody>
    )
  }
}
