import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types'

import { StaticBody, ObjModel } from './index';
import lampModel from '../resources/models/street_lamp/streetlamp.obj';
import lampMaterial from '../resources/models/street_lamp/streetlamp.mtl';

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
      <StaticBody>
        <ObjModel model={lampModel} material={lampMaterial} position="0 0 -3" />
      </StaticBody>
    )
  }
}
