export const translateCoordinatesBy = (originalCoordinates, translateBy) => {
  if (typeof originalCoordinates === "string") {
    originalCoordinates = coordinatesStringToObject(originalCoordinates);
  }

  const { x = 0, y = 0, z = 0 } = translateBy;
  const newCoordinates = { 
    x: originalCoordinates.x + x,
    y: originalCoordinates.y + y,
    z: originalCoordinates.z + z,
  }

  return newCoordinates;
}

export const coordinatesStringToObject = (str) => {
  const [x, y, z] = str.split(' ').map(coordinate => Number.parseFloat(coordinate));
  return {x, y, z}
}