import { useEffect, useState } from 'react';

const useDetectViewportHeight = () => {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const detectViewportHeight = () => {
      setVh(window.innerHeight * 0.01);
    };

    detectViewportHeight();
  }, []);

  return { vh };
};

export default useDetectViewportHeight;
