import {  useRef  } from 'react';

export default function useDebounce (fn: Function, delay: number): Function {

  const timeoutRef = useRef<any>(null);
  
  function debounceFn(...args: any[]) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay)
  }
  
  return debounceFn;
}