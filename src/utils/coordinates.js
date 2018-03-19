import { Map } from 'immutable';

export const changeCoordinatesBy = (originalCoordinates, changeBy) => {
  
  const normalizedCoordinates = normalizeCoordinates(originalCoordinates);

  const { x = 0, y = 0, z = 0 } = changeBy;
  const newCoordinates = { 
    x: normalizedCoordinates.get('x') + x,
    y: normalizedCoordinates.get('y') + y,
    z: normalizedCoordinates.get('z') + z,
  }

  return newCoordinates;
}

export const coordinatesStringToMap = (str) => {
  const [x, y, z] = str.split(' ').map(coordinate => Number.parseFloat(coordinate));
  return Map({x, y, z});
}

export const convertToRadians = (degrees) => {
  return degrees * (Math.PI / 180);
}

export const getCoordinatesDiff = (coordinates1, coordinates2) => {
  const c1 = normalizeCoordinates(coordinates1);
  const c2 = normalizeCoordinates(coordinates2);
  const diff = {
    x: c2.get('x') - c1.get('x'),
    y: c2.get('y') - c1.get('y'),
    z: c2.get('z') - c1.get('z'),
  }
  return diff;
}

// convert all types of coordinates to object
const normalizeCoordinates = (coordinates) => {
  if(coordinates == null) {
    return Map({
      x: 0,
      y: 0,
      z: 0
    })
  } else if (typeof coordinates === "string") {
    const [x = 0, y = 0, z = 0] = coordinates.split(' ').map(coordinate => Number.parseFloat(coordinate));
    return Map({x, y, z});
  } else if (!Map.isMap(coordinates)) {
    return Map(coordinates);
  }
  return coordinates;
}

export const calcPositionOnRotation = (radius, degrees, center = {x: 0, z: 0}, height) => {
  const centerMap = normalizeCoordinates(center);
  const radians = convertToRadians(degrees);
  const newPosition = Map({
    x: -radius * Math.sin(radians) + centerMap.get('x'),
    y: height,
    z: -radius * Math.cos(radians) + centerMap.get('z'),
  })
  return newPosition;
}