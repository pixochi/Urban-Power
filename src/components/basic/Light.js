import React, { PureComponent } from 'react'
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class Light extends PureComponent {

  static propTypes = {
    type: PropTypes.string
  }

  static defaultProps = {
    type: 'ambient'
  }

  render() {
    const { type } = this.props;

    return (
      <Entity 
        light={{type}}
      />
    )
  }
}
