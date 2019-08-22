/* eslint-disable max-len */
import React from 'react';

export default () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="21"
    width="17"
    className="js-icon-protege-desatived"
  >
    <defs>
      <path
        id="b"
        d="M10.128 8.93l-2.16.69-2.956.944a1.109 1.109 0 0 1-1.29-.61l-.004-.01a1.124 1.124 0 0 1 .365-1.386l2.62-1.673 1.91-1.223a1.822 1.822 0 0 1 2.35.442s.235.291.336.755c.185.927-.34 1.762-1.17 2.072M13.314.834L7.742.02a1.844 1.844 0 0 0-.534 0L1.636.834C.697.971 0 1.8 0 2.777v8.898c0 .564.236 1.102.647 1.474l5.573 4.363a1.86 1.86 0 0 0 2.51 0l5.573-4.363a1.99 1.99 0 0 0 .647-1.474V2.777c0-.977-.697-1.806-1.635-1.943"
      ></path>
      <filter id="a" filterUnits="objectBoundingBox" height="133.3%" width="133.4%" y="-8.3%">
        <feOffset result="shadowOffsetOuter1" in="SourceAlpha" dy="2" dx="1"></feOffset>
        <feGaussianBlur
          result="shadowBlurOuter1"
          in="shadowOffsetOuter1"
          stdDeviation=".5"
        ></feGaussianBlur>
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
        ></feColorMatrix>
      </filter>
    </defs>
    <g fillRule="evenodd" fill="none">
      <path d="M0 0h20v20H0z"></path>
      <g>
        <use xlinkHref="#b" filter="url(#a)" fill="#000"></use>
        <use xlinkHref="#b" fill="#F16366"></use>
      </g>
      <path
        fillRule="nonzero"
        fill="#FFF"
        d="M10.46 9.1l-2.43.813-3.325 1.118c-.574.16-1.191-.131-1.45-.72l-.006-.013c-.26-.59-.074-1.277.41-1.64L6.607 6.68l2.15-1.447a1.983 1.983 0 0 1 2.642.523s.265.344.379.893c.208 1.096-.384 2.084-1.318 2.45"
      ></path>
      <path
        fill="#E93946"
        d="M10.16 8.729l-2.186.685-2.99.94a1.128 1.128 0 0 1-1.305-.606l-.005-.011a1.107 1.107 0 0 1 .37-1.38l2.65-1.664 1.933-1.217c.779-.439 1.786-.292 2.376.44 0 0 .238.29.341.75.188.923-.345 1.754-1.185 2.063m2.779-7.485L7.725.492a1.746 1.746 0 0 0-.5 0l-5.213.752A1.802 1.802 0 0 0 .482 3.04v8.22c0 .521.22 1.017.606 1.362L6.3 16.6c.671.602 1.677.602 2.348 0l5.213-3.98c.385-.345.606-.84.606-1.363V3.04c0-.903-.653-1.668-1.53-1.795"
      ></path>
    </g>
  </svg>
);
