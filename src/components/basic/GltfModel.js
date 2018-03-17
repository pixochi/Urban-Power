import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

import { aframeCoordinates } from '../../utils/propTypes';

export default class GltfModel extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    src: aframeCoordinates.isRequired,
    rotation: aframeCoordinates,
    position: aframeCoordinates,
    scale: aframeCoordinates,
    onCursorHovered: PropTypes.func,
    onCursorHoveredEnd: PropTypes.func
  }

  static defaultProps = {
    id: "gltfModel",
    rotation: '0 0 0',
    position: '0 0 0',
    scale: '1 1 1',
    onCursorHovered: () =>  null,
    onCursorHoveredEnd: () =>  null,
  }

  handleStateAdded = (ev) => {
    if (ev.detail.state === 'cursor-hovered') {
      this.props.onCursorHovered(ev);
    }
  }

  handleStateRemoved = (ev) => {
    if (ev.detail.state === 'cursor-hovered') {
      this.props.onCursorHoveredEnd(ev);
    }
  }

  render() {
    const { id, src, rotation, position, scale, onClick } = this.props;

    return (
      <Entity
        id={id}
        gltf-model={src}
        rotation={rotation}
        position={position}
        scale={scale}
        events={{
          click: onClick,
          stateadded: this.handleStateAdded,
          stateremoved: this.handleStateRemoved
        }}
      />
    )
  }
}
