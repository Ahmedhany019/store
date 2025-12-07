import { useState, useEffect } from 'react';

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // clean up if value changes قبل المدة
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}