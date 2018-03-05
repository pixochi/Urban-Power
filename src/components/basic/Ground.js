import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { StaticBody } from '../index';

export default class Ground extends PureComponent {

  static propTypes = {
    height: PropTypes.number,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    width: PropTypes.number,
  }

  static defaultProps = {
    height: 100,
    position: '0 0 0',
    width: 100
  }

  render() {
    const { height, position, width } = this.props;

    return (
      <StaticBody>
        <Entity
          primitive="a-plane"
          rotation="-90 0 0"
          position={position}
          width={width}
          height={height}
          color="red"
        />
      </StaticBody>
    )
  }
}
