import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from '../';
import trashcanModel from '../../resources/models/trashcan.glb';
import { aframeCoordinates } from '../../utils/propTypes';

class Trashcan extends PureComponent {

  static propTypes = {
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
    onClick: PropTypes.func
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '0.0009 0.0009 0.0009',
    onClick: () => null
  }

  render() {
    const { position, rotation, scale, onClick } = this.props;

    return (
      <Entity id="trashcan">
        <GltfModel
          src={trashcanModel}
          rotation={rotation}
          position={position}
          scale={scale}
          onClick={onClick}
        />
      </Entity>
    )
  }
}

export default Trashcan;
