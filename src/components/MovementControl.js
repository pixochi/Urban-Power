import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'

import { GltfModel } from './';
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
     <GltfModel 
      id="MovementControl"
      src={arrowModel}
      rotation={rotation}
      position={position}
      scale={scale}
      onClick={onClick}
     />
    )
  }
}
