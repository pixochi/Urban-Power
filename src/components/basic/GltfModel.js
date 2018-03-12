import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class GltfModel extends PureComponent {

  static propTypes = {
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
    rotation: '0 0 0',
    position: '0 0 0',
    scale: '1 1 1',
  }

  render() {
    const { src, rotation, position, scale } = this.props;

    return (
      <Entity 
        gltf-model={src}
        rotation={rotation}
        position={position}
        scale={scale}
      />
    )
  }
}
