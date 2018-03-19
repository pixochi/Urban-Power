import { Map } from 'immutable';

export const changeCoordinatesBy = (originalCoordinates, changeBy) => {
  
  const normalizedCoordinates = normalizeCoordinates(originalCoordinates);

  const { x = 0, y = 0, z = 0 } = changeBy;
  const newCoordinates = { 
    x: normalizedCoordinates.x + x,
    y: normalizedCoordinates.y + y,
    z: normalizedCoordinates.z + z,
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
    x: c2.x - c1.x,
    y: c2.y - c1.y,
    z: c2.z - c1.z,
  }
  return diff;
}

// convert all types of coordinates to object
const normalizeCoordinates = (coordinates) => {
  if(coordinates == null) {
    return {
      x: 0,
      y: 0,
      z: 0
    }
  }

  if (typeof coordinates === "string") {
    const [x = 0, y = 0, z = 0] = coordinates.split(' ').map(coordinate => Number.parseFloat(coordinate));
    return {x, y, z};
  } else if (Map.isMap(coordinates)) {
    return coordinates.toJS();
  }
  return coordinates;
}