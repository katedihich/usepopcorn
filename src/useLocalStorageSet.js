import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    // Check for a valid stored value and parse it
    return storedValue ? JSON.parse(storedValue) : initialState;
  });

  useEffect(() => {
    // Save to localStorage whenever `value` changes
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
