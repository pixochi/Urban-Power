import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react'
import PropTypes from 'prop-types'

export default class Cursor extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    geometry: PropTypes.object,
    isStatic: PropTypes.bool,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
  }

  static defaultProps = {
    color: 'red',
    geometry: {radiusInner:0.008, radiusOuter:0.02},
    isStatic: false,
    position: '0 0 0',
    rotation: '0 0 0'
  }

  render() {
    const { color, geometry, isStatic, position, rotation } = this.props;

    return (
    <Entity 
      primitive="a-camera"
      position={position}
      rotation={rotation}
      static-body={isStatic}
    >
        <Entity
          geometry={geometry}
          primitive="a-cursor" 
          color={color}
        />
    </Entity>
    )
  }
}
