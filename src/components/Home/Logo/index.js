import './styles.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/Logo-S.png';

const Logo = () => {
  const bgRef = useRef();
  const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 2,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 1,
      });

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 2,
      },
    );
  }, []);

  return (
    <div className="logo-container" ref={bgRef}>
      <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
      <svg
        width="206pt"
        height="127pt"
        version="1.0"
        viewBox="0 0 206 127"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0,127) scale(.1,-.1)"
          fill="none"
        >

          <path
            ref={outlineLogoRef}
            d="M1455 1219 c-138 -14 -333 -55 -439 -93 -183 -65 -292 -147 -316 -237 -10 -37 -9 -45 7 -67 10 -13 38 -32 63 -42 33 -13 59 -34 99 -83 67 -83 110 -104 296 -147 361 -81 481 -145 435 -231 -16 -28 -76 -56 -171 -76 -139 -30 -999 -24 -999 7 0 4 27 25 60 46 65 41 76 56 54 75 -12 10 -26 8 -72 -11
            -106 -43 -389 -191 -412 -215 -22 -24 -22 -26 -6 -44 67 -74 813 -96 1170 -36 56 10 133 34 205 64 64 26 158 63 210 82 147 53 211 121 211 223 0 64 -47 128 -130 178 -70 42 -245 101 -368 124 -171 32 -345 78 -404 108 -56 28 -63 35 -66 63 -8 86 140 133 459 149 74 3 192 1 264 -5 140 -11 155 -18 155 -71 0 -14 6 -34 13 -45 13 -17 16 -17 64 9 62 34 169 119 183 147 8 14 8 29 0 53 -9 27 -21 38 -63 57 -47 20 -70 23 -232 25 -99 1 -220 -2 -270 -7z"
          />
        </g>
      </svg>
    </div>
  );
};

export default Logo;
