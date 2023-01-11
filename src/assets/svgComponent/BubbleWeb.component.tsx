import { SVGAttributes } from 'react';

const BubbleWeb = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="108"
      height="42"
      viewBox="0 0 108 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M21.8945 1C10.5813 1 1 8.32398 1 17.81C1 27.2959 10.5813 34.6199 21.8945 34.6199H72.629C72.6544 34.6199 72.6764 34.6238 72.6927 34.6289C72.7034 34.6322 72.709 34.6352 72.7104 34.6359L80.8682 40.5972C81.5395 41.0877 82.3674 41.0858 82.981 40.827C83.5832 40.573 84.2772 39.903 84.0901 38.9092L83.2823 34.6199H86.1055C97.4187 34.6199 107 27.2959 107 17.81C107 8.32398 97.4187 1 86.1055 1H21.8945Z"
        fill="black"
        stroke="url(#paint0_linear_158_10068)"
        strokeWidth="2"
      />
      <defs>
        <linearGradient
          id="paint0_linear_158_10068"
          x1="18.3704"
          y1="2"
          x2="74.354"
          y2="60.9194"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0A31FF" />
          <stop offset="1" stopColor="#0AB5FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default BubbleWeb;
