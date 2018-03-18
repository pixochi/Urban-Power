import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { GltfModel, Light } from '../index';
import lampModel from '../../resources/models/street_lamp/streetlampg.glb';
import { translateCoordinatesBy } from '../../utils/coordinates';
import { aframeCoordinates } from '../../utils/propTypes';

export default class Lamp extends PureComponent {

  static propTypes = {
    isOn: PropTypes.bool,
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    scale: aframeCoordinates,
  }

  static defaultProps = {
    isOn: false,
    position: '0 0 0',
    rotation: '0 0 0',
    scale: '0.5 0.5 0.5',
  }

  constructor(props) {
    super(props);
    this.ligthPosition1 = translateCoordinatesBy(props.position, {x: -.65, y: 4, z: -0.4});
    this.ligthPosition2 = translateCoordinatesBy(props.position, {x: -1.4, y: 4, z: 0.4});
  }

  render() {
    const { isOn, position, rotation, scale } = this.props;

    return (
      <Entity id="lamp">
        <GltfModel 
          src={lampModel}
          rotation={rotation}
          position={position}
          scale={scale}
        />
        {
          isOn &&
          <Entity>
            <Light 
              type="point" 
              position={this.ligthPosition1} 
              intensity={0.3}
            />
            <Light 
              type="point" 
              position={this.ligthPosition2} 
              intensity={0.3}
            />
          </Entity>
        }
      </Entity>
    )
  }
}
