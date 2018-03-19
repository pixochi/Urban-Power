import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components/models';
import { toJS } from '../components/hoc';
import { rotateCamera, moveCameraStart, moveCameraEnd } from '../ducks/camera/actionCreators';
import { getCoordinatesDiff } from '../utils/coordinates';
import arrowBlueModel from '../resources/models/arrow/arrow-blue.glb';
import arrowGreenModel from '../resources/models/arrow/arrow-green.glb';

class MovementSystem extends PureComponent {

  handleCameraRotation = (ev) => {
    const { rotation, rotateCamera } = this.props;
    const { data } = ev.srcElement.components.rotation;
    const rotateBy = getCoordinatesDiff(rotation, data);
    rotateCamera(rotateBy);
  }

  render() {
    const { isEditing, position, rotation, markerPosition, moveCameraStart, moveCameraEnd } = this.props;
    const movementControlModel = isEditing ? arrowGreenModel : arrowBlueModel;

    return (
      <Entity id="movementSystem" position={position}>
        <RigidCursor
          position="0 0 0"
          center="0 -.1 -1"
          onRotationChanged={this.handleCameraRotation} 
        />
        <MovementControl
          model={movementControlModel}
          position={markerPosition}
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
    markerPosition: camera.markerPosition
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveCameraStart: () =>  dispatch(moveCameraStart()),
    moveCameraEnd: () =>  dispatch(moveCameraEnd()),
    rotateCamera: (rotateBy) => dispatch(rotateCamera(rotateBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(MovementSystem));
