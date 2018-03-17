import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from './index';
import treeModel from '../resources/models/trees/birch.glb';
// import { translateCoordinatesBy } from '../utils/coordinates';
import { aframeCoordinates } from '../utils/propTypes';

export default class Tree extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '0.008 0.005 0.008',
  }

  render() {
    const { position, rotation, scale } = this.props;

    return (
      <Entity id="tree">
        <GltfModel
          src={treeModel}
          rotation={rotation}
          position={position}
          scale={scale}
        />
      </Entity>
    )
  }
}
