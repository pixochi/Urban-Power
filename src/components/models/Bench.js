import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from '../index';
import benchModel from '../../resources/models/bench.glb';
import { aframeCoordinates } from '../../utils/propTypes';

export default class Bench extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
    onClick: PropTypes.func
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '.0008 .0006 .0008',
    onClick: () => null
  }

  render() {
    const { position, rotation, scale, onClick } = this.props;

    return (
      <Entity id="bench">
        <GltfModel
          src={benchModel}
          rotation={rotation}
          position={position}
          scale={scale}
          onClick={onClick}
        />
      </Entity>
    )
  }
}
