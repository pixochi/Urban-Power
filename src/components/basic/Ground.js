import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { StaticBody } from '../index';

export default class Ground extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    height: PropTypes.number,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    repeat: PropTypes.string,
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    texture: PropTypes.string,
    width: PropTypes.number,
  }

  static defaultProps = {
    color: 'grey',
    height: 50,
    position: '0 0 0',
    repeat: '1 1',
    rotation: '-90 0 0',
    texture: '',
    width: 50
  }

  render() {
    const { color, height, position, repeat, rotation, texture, width } = this.props;

    return (
      <StaticBody>
        <Entity
          primitive="a-plane"
          rotation={rotation}
          position={position}
          width={width}
          height={height}
          src={texture}
          color={color}
          repeat={repeat}
        />
      </StaticBody>
    )
  }
}
