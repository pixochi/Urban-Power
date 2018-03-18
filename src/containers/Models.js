import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import { toJS } from '../components/hoc';
import { startEditing, stopEditing } from '../ducks/editor/actionCreators';
// import { rotateCamera, moveCameraStart, moveCameraEnd } from '../ducks/camera/actionCreators';

const ID_SUFFIX = '_editable';

class Models extends PureComponent {

  handleStateAdded = (ev, modelId, modelType) => {
    if (ev.detail.state === 'cursor-hovered') {
      this.props.startEditing(modelId, modelType);
    }
  }

  handleStateRemoved = (ev) => {
    if (ev.detail.state === 'cursor-hovered') {
      this.props.stopEditing();
    }
  }

  render() {
    const { models, startEditing } = this.props;
    const modelComponents = Object.keys(models).map(modelType => {
      return Object.keys(models[modelType].items).map(modelId => {
        const Model = models[modelType].component;
        return (
          <Entity 
            id={`${models[modelType]}${ID_SUFFIX}`} 
            key={modelId}
            events={{
              stateadded: (ev) => this.handleStateAdded(ev, modelId, modelType),
              stateremoved: this.handleStateRemoved
            }}
          >
            <Model {...models[modelType].items[modelId]} />
          </Entity>
        )
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
    startEditing: (selectedId, modelType) => dispatch(startEditing(selectedId, modelType)),
    stopEditing: () => dispatch(stopEditing())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Models));
