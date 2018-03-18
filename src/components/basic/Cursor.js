import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react'
import PropTypes from 'prop-types'

import { aframeCoordinates } from '../../utils/propTypes';

export default class Cursor extends PureComponent {
  static propTypes = {
    color: PropTypes.string,
    geometry: PropTypes.object,
    isStatic: PropTypes.bool,
    position: aframeCoordinates,
    rotation: aframeCoordinates,
    onRotationChanged: PropTypes.func
  }

  static defaultProps = {
    color: 'red',
    geometry: {radiusInner:0.008, radiusOuter:0.02},
    isStatic: false,
    position: '0 0 0',
    rotation: '0 0 0',
    onRotationChanged: () => null
  }

  handleComponentChanged = (ev) => {
    if (ev.detail.name === 'rotation') {
      this.props.onRotationChanged(ev);
    }
  }

  render() {
    const { color, geometry, isStatic, markerPosition, position, rotation } = this.props;

    return (
      <Entity 
        primitive="a-camera"
        position={position}
        rotation={rotation}
        static-body={isStatic}
        events={{
          componentchanged: this.handleComponentChanged,
          devicemotion: () =>  console.log("device motion")
        }}
      >
          <Entity
            geometry={geometry}
            primitive="a-cursor" 
            color={color}
            position={markerPosition}
          />
      </Entity>
    )
  }
}
