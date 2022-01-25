import { useState } from 'react';

export default function usePersistentState(initialValue, key) {
  const res = localStorage.getItem(key);
  let myInitialValue = initialValue;

  if (res) {
    myInitialValue = JSON.parse(res);
  }

  const [x, setX] = useState(myInitialValue);
  localStorage.setItem(key, JSON.stringify(myInitialValue));

  return [x, (newValue) => {
    setX(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  }];
}

