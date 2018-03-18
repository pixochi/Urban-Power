import React, { Component } from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';

import { Models, MovementSystem } from './containers';
import { GltfModel, Ground, Light } from './components';
import { Lamp, Bench, Trashcan, Tree } from './components/models';
import axelTorvModel from './resources/models/axeltorv.gltf';
import groundTexture from './resources/textures/floor-bricks.png';
import './App.css';
import { AXELTORV_WIDTH, AXELTORV_HEIGHT } from './constants/dimensions';

class App extends Component {
  render() {
    return (
      <Scene>
        {/* <Sky src={skyImg} /> */}
        {/* <Light type="ambient" /> */}
        <Models />
        <MovementSystem />
        <GltfModel
          id="axelTorvModel"
          src={axelTorvModel}
          rotation="-90 28 0"
          position="-30 -100 -9"
        />       
        <Ground
          position="0 .01 8.5"
          rotation="-90 0 0"
          texture={groundTexture}
          repeat={`${AXELTORV_WIDTH/10} ${AXELTORV_HEIGHT/10}`}
          width={AXELTORV_WIDTH}
          height={AXELTORV_HEIGHT}
        />
      </Scene>
    );
  }
}

export default App;
