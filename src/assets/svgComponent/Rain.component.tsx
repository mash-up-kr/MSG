import { SVGAttributes } from 'react';

const Rain = ({ className, ...rest }: SVGAttributes<HTMLOrSVGElement>) => {
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
        d="M0 7.38462C0 3.30621 3.3062 0 7.38462 0H40.6154C44.6938 0 48 3.3062 48 7.38462V40.6154C48 44.6938 44.6938 48 40.6154 48H7.38462C3.30621 48 0 44.6938 0 40.6154V7.38462Z"
        fill="#55575D"
      />
      <mask
        id="mask0_914_351"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="48"
        height="48"
      >
        <path
          d="M0 7.38462C0 3.30621 3.3062 0 7.38462 0H40.6154C44.6938 0 48 3.3062 48 7.38462V40.6154C48 44.6938 44.6938 48 40.6154 48H7.38462C3.30621 48 0 44.6938 0 40.6154V7.38462Z"
          fill="#2E2D62"
        />
      </mask>
      <g mask="url(#mask0_914_351)">
        <rect x="31" y="34" width="10" height="14" fill="#3A3D3D" />
        <rect y="19" width="12" height="29" fill="#3A3D3D" />
        <rect x="11" y="24" width="21" height="24" fill="#2E3232" />
        <rect y="35" width="7" height="13" fill="#2E3232" />
        <rect opacity="0.9" x="14" y="27" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.3" x="6" y="22" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.3" y="22" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.3" x="6" y="29" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="14" y="34" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="2" y="39" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="20" y="41" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="26" y="27" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="20" y="27" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="26" y="34" width="3" height="3" fill="#B2B7B7" />
        <rect x="41" y="13" width="7" height="35" fill="#2E3232" />
        <rect opacity="0.9" x="44" y="17" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.8" x="44" y="24" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.9" x="44" y="35" width="3" height="3" fill="#B2B7B7" />
        <rect opacity="0.3" x="33" y="37" width="2" height="2" fill="#B2B7B7" />
        <rect opacity="0.3" x="37" y="37" width="2" height="2" fill="#B2B7B7" />
        <rect opacity="0.3" x="37" y="41" width="2" height="2" fill="#B2B7B7" />
        <rect opacity="0.3" x="33" y="45" width="2" height="2" fill="#B2B7B7" />
        <path d="M6 3V14" stroke="white" stroke-linecap="round" />
        <path d="M16 8V18" stroke="white" stroke-linecap="round" />
        <path d="M10 23V35" stroke="white" stroke-linecap="round" />
        <path d="M3 37V49" stroke="white" stroke-linecap="round" />
        <path d="M33 3V16" stroke="white" stroke-linecap="round" />
        <path d="M25 14V28.5" stroke="white" stroke-linecap="round" />
        <path d="M37 27V39" stroke="white" stroke-linecap="round" />
        <path d="M41 -1V6" stroke="white" stroke-linecap="round" />
      </g>
    </svg>
  );
};

export default Rain;
