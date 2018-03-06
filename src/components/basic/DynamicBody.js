import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';
import PropTypes from 'prop-types';

export default class DynamicBody extends PureComponent {

  static propTypes = {
    mass: PropTypes.number
  }

  static defaultProps = {
    mass: 5
  }

  render() {
    const { mass } = this.props;
    
    return (
      <Entity dynamic-body={{shape: 'box', mass}}>
        { this.props.children }
      </Entity>
    )
  }
}
