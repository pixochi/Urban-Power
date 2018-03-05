import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { StaticBody, GltfModel } from './index';
import lampModel from '../resources/models/scene.gltf';

export default class Lamp extends PureComponent {

  // static propTypes = {
  //   height: PropTypes.number,
  //   position: PropTypes.oneOfType([
  //     PropTypes.string,
  //     PropTypes.object
  //   ]),
  //   width: PropTypes.number,
  // }

  // static defaultProps = {
  //   height: 100,
  //   position: '0 0 0',
  //   width: 100
  // }

  render() {
    // const { height, position, width } = this.props;

    return (
      <Entity primitive="a-gltf-model" src={lampModel} position="0 2 -3" />
    )
  }
}
