import { toPng } from 'html-to-image';
import { RefObject, useCallback } from 'react';

const useDownloadElementToImage = <T extends HTMLElement>(ref: RefObject<T>, filename: string) => {
  const saveImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref, filename]);

  return { saveImage };
};

export default useDownloadElementToImage;
