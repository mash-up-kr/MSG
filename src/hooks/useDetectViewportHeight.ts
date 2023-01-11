import { useEffect, useState } from 'react';
import throttle from 'lodash-es/throttle';

const useDetectViewportHeight = () => {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const detectViewportHeight = throttle(() => {
      setVh(window.innerHeight * 0.01);
    }, 200);

    window.addEventListener('resize', detectViewportHeight);

    detectViewportHeight();

    return () => {
      window.removeEventListener('resize', detectViewportHeight);
    };
  }, []);

  return { vh };
};

export default useDetectViewportHeight;
