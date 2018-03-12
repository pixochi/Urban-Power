import React, { Component } from 'react';
import aframe from 'aframe';
import { Scene } from 'aframe-react';
import 'aframe-physics-system';
import 'aframe-extras';

import { 
  GltfModel, 
  Ground,
  Lamp,
  Light,
  RigidCursor, 
  Sky 
} from './components';
import axelTorvModel from './resources/models/axeltorv.gltf';
import skyDay from './resources/panoramas/day-louvre.jpeg';
import groundTexture from './resources/textures/floor-bricks.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Scene physics="debug: true">
        {/* <Sky src={skyDay} /> */}
        {/* <Light type="ambient" /> */}
        <RigidCursor />
        <GltfModel 
          src={axelTorvModel}
          rotation="-90 0 0"
          position="-20 -100 -20"
        />
        
        <Lamp isOn={true} />
        
        <Ground
          position="0 .01 8.5"
          rotation="-90 -26.5 0"
          texture={groundTexture}
          repeat="5 4"
          width={51}
          height={40}
        />
      </Scene>
    );
  }
}

export default App;
