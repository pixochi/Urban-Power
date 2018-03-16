import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Entity } from 'aframe-react';

import { RigidCursor, MovementControl } from '../components';
import { translateCameraBy } from '../ducks/camera/actionCreators';
import { translateCoordinatesBy } from '../utils/coordinates';

class MovementSystem extends PureComponent {

  moveForward = () => {
    const { position, move } = this.props;
    move(position, {x: 1});
  }

  constructor(props){
    super(props);
    this.position = props.position;
  }

  // componentDidMount = () => {
  //   this.position = this.props.position;
  // }
  

  // componentWillReceiveProps(nextProps){
  //   if(nextProps.position !== this.props.position){
  //     this.position = nextProps.position;
  //   }
  // }

  render() {
    const { position } = this.props;

    const controlPosition = translateCoordinatesBy(position, {y: 2, z: -2});
    console.log("this.pos", position)

    return (
      <Entity id="movementSystem" position={position}>
        <RigidCursor />
        <MovementControl onClick={this.moveForward} />
      </Entity>
    )
  }
}

const mapStateToProps = ({camera}) => {
  return {
    position: camera.position.toJS()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    move: (position, translateBy) => dispatch(translateCameraBy(position, translateBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovementSystem);
