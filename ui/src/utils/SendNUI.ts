import { browserMode, resName } from '@store/stores'

let isBrowserMode: boolean = false;
browserMode.subscribe((value: boolean) => {
  isBrowserMode = value;
});

let debugResName: string = "";
resName.subscribe((value: string) => {
  debugResName = value;
});

/**
* @param eventName - The endpoint eventname to target
* @param data - Data you wish to send in the NUI Callback
*
* @return returnData - A promise for the data sent back by the NuiCallbacks CB argument
*/

export async function SendNUI<T = any>(
  eventName: string,
  data: unknown = {},
  debugReturn?: T
): Promise<T> {
  if (isBrowserMode == true && debugReturn) {
    return Promise.resolve(debugReturn || {} as T)
  }
  const options = {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  };

  const resourceName = (window as any).GetParentResourceName
    ? (window as any).GetParentResourceName()
    : debugResName;


    const resp: Response = await fetch(`https://${resourceName}/${eventName}`, options);
    return await resp.json()
}
