import { onMount, onDestroy } from "svelte";

interface NuiMessage<T = unknown> {
  action: string;
  data: T;
}

/**
 * A function that manage events listeners for receiving data from the client scripts
 * @param action The specific `action` that should be listened for.
 * @param handler The callback function that will handle data relayed by this function
 *
 * @example
 * useNuiEvent<{visibility: true, wasVisible: 'something'}>('setVisible', (data) => {
 *   // whatever logic you want
 * })
 *
 **/

export function ReceiveNUI<T = unknown>(
  action: string,
  handler: (data: T) => void
) {
  const eventListener = (event: MessageEvent<NuiMessage<T>>) => {
    const { action: eventAction, data } = event.data;

    eventAction === action && handler(data);
  };
  onMount(() => window.addEventListener("message", eventListener));
  onDestroy(() => window.removeEventListener("message", eventListener));
}

