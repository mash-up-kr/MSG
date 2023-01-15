export const shareContent = (onSuccess: () => void, onError: () => void) => {
  return (shareData: ShareData = {}) => {
    navigator
      .share({
        files: shareData.files,
        text: shareData.text,
        title: shareData.title,
        url: shareData.url,
      })
      .then(onSuccess)
      .catch(onError);
  };
};
