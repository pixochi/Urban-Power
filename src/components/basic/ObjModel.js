import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class ObjModel extends PureComponent {

  static propTypes = {
    material: PropTypes.string,
    model: PropTypes.string.isRequired,
    position: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    rotation: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]), 
  }

  static defaultProps = {
    material: '',
    rotation: '0 0 0',
    position: '0 0 0'
  }

  render() {
    const { material, model, position, rotation  } = this.props;
    console.log("material:",material);

    return (
      <Entity 
        obj-model={{obj: model, mtl: material}}
        mtl={material}
        rotation={rotation}
        position={position}
      />
    )
  }
}
