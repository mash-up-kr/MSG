import { SVGAttributes } from 'react';

const Design = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8.54839C8 6.40421 9.7382 4.66602 11.8824 4.66602H16H16H20.1177C22.2618 4.66602 24 6.40421 24 8.54839C24 10.6926 22.2618 12.4308 20.1177 12.4308H16H16H11.8824C9.7382 12.4308 8 10.6926 8 8.54839ZM12.2353 12.431C9.89622 12.431 8 14.3272 8 16.6663C8 19.0054 9.89622 20.9016 12.2353 20.9016H16V16.9221C16.0111 19.1218 17.7977 20.9016 20 20.9016C22.2092 20.9016 24 19.1107 24 16.9016V16.431C24 14.2218 22.2092 12.431 20 12.431C17.7977 12.431 16.0111 14.2108 16 16.4105V12.431H12.2353ZM11.8824 20.9017C9.7382 20.9017 8 22.6399 8 24.7841C8 26.9283 9.7382 28.6665 11.8824 28.6665H12C14.2092 28.6665 16 26.8756 16 24.6665V20.9017H11.8824Z"
        fill="url(#paint0_linear_240_6305)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_240_6305"
          x1="8"
          y1="4.66602"
          x2="30.1541"
          y2="19.4352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#6842FF" />
          <stop offset="1" stopColor="#C446FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Design;
