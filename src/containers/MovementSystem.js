import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components';
import { translateCameraBy } from '../ducks/camera/actionCreators';
import { translateCoordinatesBy } from '../utils/coordinates';

class MovementSystem extends PureComponent {
  render() {
    const { moveForward, position } = this.props;

    return (
      <Entity id="movementSystem">
        <RigidCursor position={position} />
        <MovementControl position={{}} onClick={moveForward} />
      </Entity>
    )
  }
}

const mapStateToProps = ({camera}) => {
  return {
    position: camera.position
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    moveForward: () => dispatch(translateCameraBy({ x: 1 }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementSystem);
