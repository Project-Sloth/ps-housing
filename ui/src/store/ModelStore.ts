import { writable } from "svelte/store";
import type { Writable } from 'svelte/store';
import { SendNUI } from "@utils/SendNUI";
import type { position, quaternion } from '@customTypes/type';
import { convertToThreeCordSystem, convertToGTACordSystem } from '@customTypes/type';
import { type Quaternion, Euler } from "three";
import { Quaternion as Quan, MathUtils } from 'three'

interface modelState {
  show: Writable<boolean>;
  cameraLookAt: Writable<position>;
  cameraPosition: Writable<position>;
  objectPosition: Writable<position>;
  objectEuler: Writable<Euler>;
  entity: Writable<number>;
}

interface setupModelMessage {
  objectPosition: position;
  objectRotation: position;
  cameraPosition: position;
  cameraLookAt: position;
  entity: number;
}

interface updateCameraPositionMessage {
  cameraPosition: position;
}

interface updateCameraLookAtMessage {
  cameraLookAt: position;
}

interface updateCameraMessage extends updateCameraPositionMessage, updateCameraLookAtMessage {
  objectPosition: position;
}

function directionalVector(startPos: position, endPos: position): position {
  return {
    x: endPos.x - startPos.x,
    y: endPos.y - startPos.y,
    z: endPos.z - startPos.z,
  }
}

const store = () => {
  const ModelStore: modelState = {
    show: writable(false),
    cameraPosition: writable({ x: 0, y: 0, z: 1 }),
    cameraLookAt: writable({ x: 0, y: 0, z: 10 }),
    objectPosition: writable({ x: 0, y: 0, z: 10 }),
    objectEuler: writable(new Euler(0, 0, 0, "ZXY")),
    entity: writable(0),
  }

  const methods = {
    setupModel(data: setupModelMessage) {
      ModelStore.cameraPosition.set(convertToThreeCordSystem(data.cameraPosition));
      ModelStore.cameraLookAt.set(convertToThreeCordSystem(data.cameraLookAt));
      ModelStore.objectPosition.set(convertToThreeCordSystem(data.objectPosition));
      ModelStore.objectEuler.set(new Euler(
        MathUtils.degToRad(data.objectRotation.x),
        MathUtils.degToRad(data.objectRotation.z),
        MathUtils.degToRad(data.objectRotation.y),
        'YZX'))
      ModelStore.show.set(true);
      ModelStore.entity.set(data.entity);
    },
    updateCamera(data: updateCameraMessage) {
      ModelStore.cameraPosition.set(convertToThreeCordSystem(data.cameraPosition));
      ModelStore.cameraLookAt.set(convertToThreeCordSystem(data.cameraLookAt));
      // ModelStore.objectPosition.set(convertToThreeCordSystem(data.objectPosition));
      // ModelStore.objectQuaternion.set(new Quan(
      //   data.objectQuaternion.x, data.objectQuaternion.y, data.objectQuaternion.z, data.objectQuaternion.w));
    },
    updateCameraPosition(data: updateCameraPositionMessage) {
      // console.log("Update Camera Position in store:", data.cameraPosition);
      ModelStore.cameraPosition.set(data.cameraPosition);
    },
    updateCameraLookAt(data: updateCameraLookAtMessage) {
      ModelStore.cameraLookAt.set(data.cameraLookAt);
    },
    sendMovementUpdate(pos: position) {
        SendNUI("moveObject", pos);
    },
    sendRotationUpdate(euler: position) {
      const gtaCoords = convertToGTACordSystem(euler);
      SendNUI("rotateObject", {
        x: MathUtils.radToDeg(gtaCoords.x).toFixed(2),
        y: MathUtils.radToDeg(gtaCoords.y).toFixed(2), //for some reason the z axis is inverted
        z: MathUtils.radToDeg(gtaCoords.z).toFixed(2),
      });
    }

  }

  return {
    ...ModelStore,
    ...methods
  }
}

export default store();