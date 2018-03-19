import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import { connect } from 'react-redux';

import { toJS } from '../components/hoc';
import { startEditing } from '../ducks/editor/actionCreators';

const ID_SUFFIX = '_editable';

class Models extends PureComponent {

  handleStateAdded = (ev, modelId, modelType) => {
    const { isEditing, startEditing } = this.props;
    if (ev.detail.state === 'cursor-hovered') {
      if(!isEditing) {
        startEditing(modelId, modelType);
      } 
    }
  }

  render() {
    const { models, startEditing } = this.props;
    const modelComponents = Object.keys(models).map(modelType => {
      return Object.keys(models[modelType].items).map(modelId => {
        const Model = models[modelType].component;
        return (
          <Entity 
            id={`${modelType}${ID_SUFFIX}`} 
            key={modelId}
            events={{
              stateadded: (ev) => this.handleStateAdded(ev, modelId, modelType),
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

const mapStateToProps = ({models, editor}) => {
  return {
    models,
    isEditing: editor.isEditing
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditing: (selectedId, modelType) => dispatch(startEditing(selectedId, modelType)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(toJS(Models));
