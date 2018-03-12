import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class GltfModel extends PureComponent {

  static propTypes = {
    id: PropTypes.string,
    src: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]).isRequired,
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    scale: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
  }

  static defaultProps = {
    id: "gltfModel",
    rotation: '0 0 0',
    position: '0 0 0',
    scale: '1 1 1',
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
          click: onClick
        }}
      />
    )
  }
}
