import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel, Light } from './';
import arrowModel from '../resources/models/arrow.glb';
import { aframeCoordinates } from '../utils/propTypes';

export default class MovementControl extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
  }

  static defaultProps = {
    onClick: () =>  console.log("CLicked nav control"),
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '3 3 3',
  }

  render() {
    const { onClick, position, rotation, scale } = this.props;

    return (
      <Entity id="MovementControl" rotation={rotation}
      position={position}>
        <Light 
          type="point" 
          position="0 -.15 0.2" 
          intensity={0.5}
          color="#6bede1"
        />
        <GltfModel 
          src={arrowModel}
          scale={scale}
          onClick={onClick}
        />
      </Entity>   
    )
  }
}
