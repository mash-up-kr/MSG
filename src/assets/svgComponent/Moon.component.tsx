import { SVGAttributes } from 'react';

const Moon = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <circle cx="17" cy="17" r="17" fill="url(#paint0_linear_103_13333)" />
      <defs>
        <linearGradient
          id="paint0_linear_103_13333"
          x1="29"
          y1="33"
          x2="8.5"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F744A0" />
          <stop offset="0.304972" stopColor="#E879E3" />
          <stop offset="0.509154" stopColor="#EC8EFB" />
          <stop offset="0.709972" stopColor="#CA7BF9" />
          <stop offset="1" stopColor="#6140F2" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Moon;
