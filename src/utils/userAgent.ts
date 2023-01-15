const getUserAgentOS = (navigator: Navigator) => {
  const { userAgent: ua, platform } = navigator;
  switch (true) {
    case /Android/.test(ua):
      return 'Android';
    case /iPhone|iPad|iPod/.test(platform):
      return 'iOS';
    case /Win/.test(platform):
      return 'Windows';
    case /Mac/.test(platform):
      return 'Mac';
    case /CrOS/.test(ua):
      return 'Chrome OS';
    case /Firefox/.test(ua):
      return 'Firefox OS';
    default:
      return null;
  }
};

export type UserAgentOS = NonNullable<ReturnType<typeof getUserAgentOS>>;

export const detectOS = (os: UserAgentOS) => {
  return getUserAgentOS(window.navigator) === os;
};
