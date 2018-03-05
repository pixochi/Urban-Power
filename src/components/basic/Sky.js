import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class Sky extends PureComponent {

  static propTypes = {
    src: PropTypes.oneOfType([
      PropTypes.string
    ]).isRequired
  }

  render() {
    const { src } = this.props;

    return (
      <Entity 
        primitive='a-sky'
        src={src}
      />
     
    )
  }
}
