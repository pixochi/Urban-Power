import React, { PureComponent } from 'react';
// import { Entity } from 'aframe-react';

export default (ModelComponent) => {

  return class extends PureComponent {

    render() {
      console.log("EDITABLE", this.props)
      return (
        <ModelComponent onClick={() => console.log("editable clicked")} {...this.props} />
      )
    }
  };
}