import React, { PureComponent } from 'react';
import { Entity } from 'aframe-react';

import { aframeCoordinates } from '../../utils/propTypes';

export default class Sky extends PureComponent {

  static propTypes = {
    src: aframeCoordinates.isRequired
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
