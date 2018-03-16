import { Map } from 'immutable';

export const translateCoordinatesBy = (originalCoordinates, translateBy) => {
  
  if (typeof originalCoordinates === "string") {
    originalCoordinates = coordinatesStringToMap(originalCoordinates);
  } else if (!Map.isMap(originalCoordinates)) {
    originalCoordinates = Map(originalCoordinates);
  }

  const { x = 0, y = 0, z = 0 } = translateBy;
  const newCoordinates = { 
    x: originalCoordinates.get('x') + x,
    y: originalCoordinates.get('y') + y,
    z: originalCoordinates.get('z') + z,
  }

  return newCoordinates;
}

export const coordinatesStringToMap = (str) => {
  const [x, y, z] = str.split(' ').map(coordinate => Number.parseFloat(coordinate));
  return Map({x, y, z});
}