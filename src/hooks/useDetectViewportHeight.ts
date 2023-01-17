import { detectOS } from '@/utils/userAgent';
import { throttle } from 'lodash-es';
import { useEffect, useState } from 'react';

const useDetectViewportHeight = () => {
  const [vh, setVh] = useState(0);

  useEffect(() => {
    const detectViewportHeight = throttle(() => {
      setVh(window.innerHeight * 0.01);
    }, 200);

    if (!detectOS('Android') && !detectOS('iOS')) {
      window.addEventListener('resize', detectViewportHeight);
    }

    detectViewportHeight();

    return () => {
      window.removeEventListener('resize', detectViewportHeight);
    };
  }, []);

  return { vh };
};

export default useDetectViewportHeight;
