import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from './index';
import benchModel from '../resources/models/bench.glb';
// import { translateCoordinatesBy } from '../utils/coordinates';
import { aframeCoordinates } from '../utils/propTypes';

export default class Bench extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '1 1 1',
  }

  render() {
    const { position, rotation, scale } = this.props;

    return (
      <Entity id="bench">
        <GltfModel
          src={benchModel}
          rotation={rotation}
          position={position}
          scale={scale}
        />
      </Entity>
    )
  }
}
