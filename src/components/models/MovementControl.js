import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel, Light } from '../';
import arrowBlueModel from '../../resources/models/arrow/arrow-blue.glb';
import { aframeCoordinates } from '../../utils/propTypes';

export default class MovementControl extends PureComponent {

  static propTypes = {
    onClick: PropTypes.func,
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
    model: PropTypes.string,
    onCursorHovered: PropTypes.func,
    onCursorHoveredEnd: PropTypes.func
  }

  static defaultProps = {
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '3 3 3',
    model: arrowBlueModel,
    onClick: () =>  null,
    onCursorHovered: () => null,
    onCursorHoveredEnd: () => null
  }

  render() {
    const { model, onClick, position, rotation, scale, onCursorHovered, onCursorHoveredEnd } = this.props;

    return (
      <Entity 
        id="MovementControl" 
        rotation={rotation}
        position={position}
      >
        <Light 
          type="point" 
          position="0 -.15 0.2" 
          intensity={0.5}
          color="#fff"
        />
        <GltfModel 
          src={model}
          scale={scale}
          onClick={onClick}
          onCursorHovered={onCursorHovered}
          onCursorHoveredEnd={onCursorHoveredEnd}
        />
      </Entity>   
    )
  }
}
