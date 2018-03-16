import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

import { aframeCoordinates } from '../../utils/propTypes';

export default class Light extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    intensity: PropTypes.number,
    position: aframeCoordinates,
    type: PropTypes.string
  }

  static defaultProps = {
    color: '#98cff3',
    intensity: 1,
    position: '0 0 0',
    type: 'ambient'
  }

  render() {
    const { color, intensity, position, type } = this.props;

    return (
      <Entity 
        light={{type, color, intensity}}
        position={position}
      />
    )
  }
}
