import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import { toJS } from '../components/hoc';
import { Bench } from '../components/models';
// import { rotateCamera, moveCameraStart, moveCameraEnd } from '../ducks/camera/actionCreators';


class Models extends PureComponent {

  render() {
    const { models } = this.props;
    const modelComponents = Object.keys(models).map(modelType => {
      return Object.keys(models[modelType].items).map(modelId => {
        const Model = models[modelType].component;
        return <Model key={modelId} {...models[modelType].items[modelId]} />
      })
    });

    return (
      <Entity id="models">
        { modelComponents }
      </Entity>
    )
  }
}

const mapStateToProps = ({models}) => {
  return {
    models,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // moveCameraStart: () =>  dispatch(moveCameraStart()),
    // moveCameraEnd: () =>  dispatch(moveCameraEnd()),
    // rotateCamera: (nextRotation) => dispatch(rotateCamera(nextRotation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Models));
