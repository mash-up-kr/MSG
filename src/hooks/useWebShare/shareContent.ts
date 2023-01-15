export const shareContent = (onSuccess: () => void, onError: () => void) => {
  return ({ files, text, title, url }: ShareData = {}) => {
    navigator.share({ files, text, title, url }).then(onSuccess).catch(onError);
  };
};
