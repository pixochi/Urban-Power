import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';

export default class StaticBody extends PureComponent {
  render() {
    return (
      <Entity static-body="shape: box">
        { this.props.children }
      </Entity>
    )
  }
}
