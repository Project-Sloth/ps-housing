export interface position {
  x: number;
  y: number;
  z: number;
}

export interface quaternion {
  x: number;
  y: number;
  z: number;
  w: number;
}

export function convertToThreeCordSystem(pos: position): position {
  return { x: pos.x, y: pos.z, z: -pos.y };
}

export function convertToGTACordSystem(pos: position): position {
  return {x: pos.x, y: -pos.z, z: pos.y };
}
