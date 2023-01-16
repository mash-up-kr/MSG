export const shareContent = (onSuccess: () => void, onError: (error?: unknown) => void) => {
  return ({ files, text, title, url }: ShareData = {}) => {
    navigator
      .share({ files, text, title, url })
      .then(onSuccess)
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          window.location.reload();
        }
        onError();
      });
  };
};
