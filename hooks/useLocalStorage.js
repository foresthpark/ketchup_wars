import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  if (typeof window !== "undefined") {
    const savedValue = JSON.parse(window.localStorage.getItem(key));

    if (savedValue) return savedValue;

    if (initialValue instanceof Function) return initialValue();

    return initialValue;
  }
};

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}
