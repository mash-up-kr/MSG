import { SVGAttributes } from 'react';

const SunsetBg = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      className={className}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M0 7.38462C0 3.30621 3.30621 0 7.38462 0H40.6154C44.6938 0 48 3.30621 48 7.38462V40.6154C48 44.6938 44.6938 48 40.6154 48H7.38462C3.30621 48 0 44.6938 0 40.6154V7.38462Z"
        fill="url(#paint0_linear_230_6551)"
      />
      <path
        d="M34.2308 22.6154C34.2308 25.1644 32.1644 27.2308 29.6154 27.2308C27.0664 27.2308 25 25.1644 25 22.6154C25 20.0664 27.0664 18 29.6154 18C32.1644 18 34.2308 20.0664 34.2308 22.6154Z"
        fill="#FFFBD6"
      />
      <path
        d="M10.1098 19.529L0 29.9999V40.62C0 44.6959 3.30414 48 7.38 48H40.62C44.6959 48 48 44.6959 48 40.62V36.4614L42.337 29.54C40.932 27.8228 38.3405 27.7237 36.8085 29.3287L30 36.4614L15.5648 19.6854C14.147 18.0377 11.6197 17.9652 10.1098 19.529Z"
        fill="#3A1919"
      />
      <defs>
        <linearGradient
          id="paint0_linear_230_6551"
          x1="24"
          y1="0"
          x2="24"
          y2="48"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF617E" />
          <stop offset="1" stopColor="#FFC28A" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SunsetBg;
