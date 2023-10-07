import { useEffect } from 'react';

export const useWindowEventListener = (eventName: string, listener: EventListener) => {
  useEffect(() => {
    window.addEventListener(eventName, listener);
    return () => {
      window.removeEventListener(eventName, listener);
    };
  }, [eventName, listener]);

  return;
};