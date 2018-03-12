import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Cursor, StaticBody, MovementControl } from './index';
import { translateBy } from '../ducks/camera/actionCreators';

class RigidCursor extends PureComponent {
  render() {
    const { moveForward, position } = this.props;

    return (
      <StaticBody id="navigationControl">
        <Cursor position={position} />
        <MovementControl position={position} onClick={moveForward} />
      </StaticBody>
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
    moveForward: () => dispatch(translateBy({ x: 1 }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RigidCursor);
