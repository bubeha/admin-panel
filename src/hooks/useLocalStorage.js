import { useEffect, useState } from 'react';

export default (key, initialValue = null) => {
  const [value, setValue] = useState(() => (
    localStorage.getItem(key) || initialValue
  ));

  useEffect(() => {
    if (!value) {
      return;
    }

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
