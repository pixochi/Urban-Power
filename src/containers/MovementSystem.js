import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components';
import { rotateCamera, moveCameraStart, moveCameraEnd } from '../ducks/camera/actionCreators';
import { convertToRadians } from '../utils/coordinates';

class MovementSystem extends PureComponent {

  controlPosition = {
    x: 0,
    y: 2, // distance between camera and MovementControl
    z: -2
  }

  handleCameraRotation = (ev) => {
    const { data } = ev.srcElement.components.rotation;
    this.props.rotateCamera(data);
    this.controlPosition = this.calcPositionOnRotationChanged(this.controlPosition.y, data.y);
  }

  calcPositionOnRotationChanged = (radius, degrees) => {
    const radians = convertToRadians(degrees);
    const newPosition = {
      x: -radius * Math.sin(radians),
      y: this.controlPosition.y,
      z: -radius * Math.cos(radians),
    }

    return newPosition;
  }

  render() {
    const { position, rotation, moveCameraStart, moveCameraEnd } = this.props;

    return (
      <Entity id="movementSystem" position={position}>
        <RigidCursor
          position="0 0 0"
          markerPosition="0 -.1 -1"
          onRotationChanged={this.handleCameraRotation} 
        />
        <MovementControl 
          position={this.controlPosition}
          rotation={rotation}
          onCursorHovered={moveCameraStart}
          onCursorHoveredEnd={moveCameraEnd}
        />
      </Entity>
    )
  }
}

const mapStateToProps = ({camera}) => {
  return {
    position: camera.position.toJS(),
    rotation: camera.rotation.toJS(),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCameraStart: () =>  dispatch(moveCameraStart()),
    moveCameraEnd: () =>  dispatch(moveCameraEnd()),
    rotateCamera: (nextRotation) => dispatch(rotateCamera(nextRotation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementSystem);
