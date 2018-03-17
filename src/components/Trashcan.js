import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from './index';
import trashcanModel from '../resources/models/trashcan.glb';
// import { translateCoordinatesBy } from '../utils/coordinates';
import { aframeCoordinates } from '../utils/propTypes';

export default class Trashcan extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '0.0009 0.0009 0.0009',
  }

  render() {
    const { position, rotation, scale } = this.props;

    return (
      <Entity id="tree">
        <GltfModel
          src={trashcanModel}
          rotation={rotation}
          position={position}
          scale={scale}
        />
      </Entity>
    )
  }
}
