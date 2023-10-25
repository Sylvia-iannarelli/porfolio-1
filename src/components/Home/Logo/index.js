import './styles.scss';
import { useRef } from 'react';
import LogoS1 from '../../../assets/images/Logo-S-1.svg';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className="logo-container">
      <img className="solid-logo" src={LogoS1} alt="S" />
      <svg
        width="180pt"
        height="158pt"
        version="1.0"
        viewBox="0 0 180 158"
        xmlns="http://wwww.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 490) scale(.1 -.1)"
          fill="none"
          strokeWidth="10px"
        >
          <path d="M1526 1539 c-142 -21 -389 -99 -564 -180 -264 -122 -442 -287 -442
          -411 0 -51 25 -74 91 -83 44 -6 66 -17 115 -56 34 -27 74 -54 90 -60 18 -8
          130 -15 299 -19 288 -8 344 -17 391 -61 32 -30 30 -51 -5 -92 -40 -44 -103
          -78 -241 -125 -188 -64 -722 -182 -826 -182 l-36 0 57 61 c51 56 55 63 41 77
          -13 14 -19 14 -42 2 -83 -45 -394 -318 -394 -347 0 -74 463 -9 916 127 212 64
          307 107 429 196 61 44 140 99 177 123 126 81 178 162 163 255 -6 31 -19 52
          -54 87 -89 86 -250 113 -617 102 -234 -7 -333 5 -371 43 -87 87 171 224 578
          308 184 38 249 33 249 -18 0 -13 9 -31 19 -40 18 -16 21 -16 56 15 42 37 114
          129 139 177 16 31 16 34 -1 62 -28 48 -87 58 -217 39z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
