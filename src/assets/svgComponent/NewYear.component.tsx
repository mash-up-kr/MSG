import { SVGAttributes } from 'react';

const NewYear = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
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
      <path
        d="M0 7.38462C0 3.30621 3.30621 0 7.38462 0H40.6154C44.6938 0 48 3.30621 48 7.38462V40.6154C48 44.6938 44.6938 48 40.6154 48H7.38462C3.30621 48 0 44.6938 0 40.6154V7.38462Z"
        fill="url(#paint0_linear_914_7206)"
      />
      <path
        d="M34.2309 22.6154C34.2309 25.1644 32.1645 27.2308 29.6155 27.2308C27.0665 27.2308 25.0001 25.1644 25.0001 22.6154C25.0001 20.0664 27.0665 18 29.6155 18C32.1645 18 34.2309 20.0664 34.2309 22.6154Z"
        fill="#E47D6E"
      />
      <mask
        id="mask0_914_7206"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <path
          d="M0 7.38462C0 3.30621 3.30621 0 7.38462 0H40.6154C44.6938 0 48 3.30621 48 7.38462V40.6154C48 44.6938 44.6938 48 40.6154 48H7.38462C3.30621 48 0 44.6938 0 40.6154V7.38462Z"
          fill="#323147"
        />
      </mask>
      <g mask="url(#mask0_914_7206)">
        <path
          d="M10.1098 19.529L0 29.9999V48.4614H48V36.4614L42.337 29.54C40.932 27.8228 38.3405 27.7237 36.8085 29.3287L30 36.4614L15.5648 19.6854C14.147 18.0377 11.6197 17.9652 10.1098 19.529Z"
          fill="#456077"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_914_7206"
          x1="24"
          y1="-10"
          x2="24"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2ADAE" />
          <stop offset="1" stopColor="#EEE9CA" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default NewYear;
