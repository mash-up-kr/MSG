const getTitle = (title?: string) => {
  if (!title) {
    return document.title;
  }
  return title;
};

export const shareContent = (onSuccess: () => void, onError: () => void) => {
  return (shareData: ShareData = {}) => {
    navigator
      .share({
        text: shareData.text,
        title: getTitle(shareData.title),
        url: shareData.url,
      })
      .then(onSuccess)
      .catch(onError);
  };
};
