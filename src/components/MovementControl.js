import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel } from './';
import arrowModel from '../resources/models/arrow.glb';

export default class MovementControl extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    scale: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
  }

  static defaultProps = {
    onClick: () =>  console.log("CLicked nav control"),
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '3 3 3',
  }

  render() {
    const { color, onClick, position, repeat, rotation, scale } = this.props;

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
