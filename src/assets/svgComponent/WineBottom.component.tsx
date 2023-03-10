import { SVGAttributes } from 'react';

const WineBottom = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <g clipPath="url(#clip0_312_2025)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M32.1214 47.5147L24.5 45.6093V32H23.5V45.6094L15.8789 47.5147L16.0002 48.4998H32.0002L32.1214 47.5147Z"
          fill="white"
        />
        <path
          opacity="0.5"
          d="M14 10C14 9.44772 14.4477 9 15 9H33C33.5523 9 34 9.44772 34 10V22C34 27.5228 29.5228 32 24 32C18.4772 32 14 27.5228 14 22V10Z"
          fill="white"
        />
        <path
          d="M15 21.9174C15 21.4154 15.407 21 15.9091 21H32.0909C32.593 21 33 21.4154 33 21.9174C33 26.888 28.9706 31 24 31C19.0294 31 15 26.888 15 21.9174Z"
          fill="#6A0000"
        />
      </g>
      <defs>
        <clipPath id="clip0_312_2025">
          <rect width="48" height="48" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WineBottom;
