import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components';
import { translateCameraBy, rotateCamera } from '../ducks/camera/actionCreators';
import { translateCoordinatesBy } from '../utils/coordinates';

class MovementSystem extends PureComponent {

  controlPosition = {
    x: 0,
    y: 2, // distance between camera and MovementControl
    z: -2
  }

  // default rotation
  controlRotation = { y:0 }

  // how far is the camera moved
  moveByPoints = 1;

  moveForward = () => {
    const { position, moveCamera } = this.props;
    const translateBy = { 
      x: -this.moveByPoints * Math.sin(this.radians),
      z: -this.moveByPoints * Math.cos(this.radians) 
    }
    moveCamera(position, translateBy);
  }

  handleCameraRotation = (ev) => {
    const { data } = ev.srcElement.components.rotation;
    this.props.rotateCamera(data);
    this.controlPosition = this.calcPositionOnRotationChanged(this.controlPosition.y, data.y);
    this.controlRotation = { y: data.y }
    console.log("ROTATION:",this.controlRotation)
  }

  calcPositionOnRotationChanged = (radius, degrees) => {
    this.radians = this.convertToRadians(degrees);
    const newPosition = {
      x: -radius * Math.sin(this.radians),
      y: this.controlPosition.y,
      z: -radius * Math.cos(this.radians),
    }

    return newPosition;
  }

  convertToRadians = (degrees) => {
    return degrees * (Math.PI / 180);
  }

  render() {
    const { position } = this.props;

    return (
      <Entity id="movementSystem" position={position}>
        <RigidCursor onRotationChanged={this.handleCameraRotation} />
        <MovementControl 
          position={this.controlPosition}
          rotation={this.controlRotation}
          onClick={this.moveForward}  
        />
      </Entity>
    )
  }
}

const mapStateToProps = ({camera}) => {
  return {
    position: camera.position.toJS(),
    rotation: camera.rotation.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCamera: (position, translateBy) => dispatch(translateCameraBy(position, translateBy)),
    rotateCamera: (nextRotation) => dispatch(rotateCamera(nextRotation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementSystem);
