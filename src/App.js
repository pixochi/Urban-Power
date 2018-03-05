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
import './App.css';

class App extends Component {
  render() {
    return (
      <Scene physics="debug: true">
        <Sky src={skyDay} />
        <Light type="ambient" />
        <RigidCursor />
        <GltfModel 
          src={axelTorvModel}
          rotation="-90 0 0"
          position="-20 -100 -20"
          isStaticBody
        />
        <Ground position="0 -0.2 0" />
        <Lamp />
      </Scene>
    );
  }
}

export default App;
