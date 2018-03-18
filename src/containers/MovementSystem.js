import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components/models';
import { toJS } from '../components/hoc';
import { rotateCamera, moveCameraStart, moveCameraEnd } from '../ducks/camera/actionCreators';
import { convertToRadians } from '../utils/coordinates';
import arrowBlueModel from '../resources/models/arrow/arrow.glb';
import arrowGreenModel from '../resources/models/arrow/arrow-green.glb';

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
    const { isEditing, position, rotation, moveCameraStart, moveCameraEnd } = this.props;
    const movementControlModel = isEditing ? arrowGreenModel : arrowBlueModel;

    return (
      <Entity id="movementSystem" position={position}>
        <RigidCursor
          position="0 0 0"
          markerPosition="0 -.1 -1"
          onRotationChanged={this.handleCameraRotation} 
        />
        <MovementControl
          model={movementControlModel}
          position={this.controlPosition}
          rotation={rotation}
          onCursorHovered={moveCameraStart}
          onCursorHoveredEnd={moveCameraEnd}
        />
      </Entity>
    )
  }
}

const mapStateToProps = ({camera, editor}) => {
  return {
    isEditing: editor.isEditing,
    position: camera.position,
    rotation: camera.rotation,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCameraStart: () =>  dispatch(moveCameraStart()),
    moveCameraEnd: () =>  dispatch(moveCameraEnd()),
    rotateCamera: (nextRotation) => dispatch(rotateCamera(nextRotation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(MovementSystem));
