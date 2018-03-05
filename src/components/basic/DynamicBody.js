import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';

export default class DynamicBody extends PureComponent {
  render() {
    return (
      <Entity dynamic-body="shape: box">
        { this.props.children }
      </Entity>
    )
  }
}
