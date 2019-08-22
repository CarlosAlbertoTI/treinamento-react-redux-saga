/* eslint-disable max-len */
import React from 'react';

export default () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="36" width="36" className="js-only-logged">
    <defs>
      <circle r="16" cy="16" cx="16" id="a"></circle>
    </defs>
    <g fillRule="evenodd" fill="none">
      <circle r="18" cy="18" cx="18" fillRule="nonzero" fill="#FAF1CC"></circle>
      <g transform="translate(2 2)">
        <mask fill="#fff" id="b">
          <use xlinkHref="#a"></use>
        </mask>
        <g mask="url(#b)" opacity=".8">
          <path
            fill="#000"
            d="M15.135 18.4c2.116 0 3.948-.758 5.445-2.255 1.497-1.497 2.256-3.329 2.256-5.445 0-2.115-.759-3.947-2.256-5.444C19.083 3.759 17.25 3 15.135 3c-2.116 0-3.947.759-5.444 2.256C8.194 6.753 7.435 8.585 7.435 10.7c0 2.116.759 3.948 2.256 5.445 1.497 1.497 3.329 2.256 5.444 2.256zM28.61 27.584a19.02 19.02 0 0 0-.26-2.02 15.916 15.916 0 0 0-.497-2.03 10.032 10.032 0 0 0-.835-1.895 7.148 7.148 0 0 0-1.259-1.641 5.551 5.551 0 0 0-1.808-1.136 6.25 6.25 0 0 0-2.31-.418c-.326 0-.641.134-1.251.53-.375.245-.814.528-1.304.841-.419.267-.986.517-1.687.743a6.699 6.699 0 0 1-2.063.334c-.685 0-1.379-.113-2.063-.334-.7-.226-1.268-.476-1.686-.743-.485-.31-.924-.593-1.305-.84-.609-.398-.925-.532-1.251-.532-.831 0-1.608.141-2.309.419a5.547 5.547 0 0 0-1.809 1.136 7.15 7.15 0 0 0-1.258 1.64 10.052 10.052 0 0 0-.835 1.895c-.2.625-.367 1.308-.497 2.031a18.953 18.953 0 0 0-.26 2.021A27.402 27.402 0 0 0 2 29.473c0 1.669.53 3.02 1.577 4.017 1.033.983 2.4 1.482 4.063 1.482h15.394c1.663 0 3.03-.499 4.063-1.482 1.046-.996 1.577-2.347 1.577-4.017 0-.644-.022-1.28-.065-1.889z"
          ></path>
          <path
            opacity=".2"
            fill="#FFF"
            d="M16.626 3.134a5.975 5.975 0 0 0-1.299 3.728v11.537a8.746 8.746 0 0 1-.192.002c-2.115 0-3.947-.76-5.444-2.256-1.497-1.497-2.256-3.329-2.256-5.445 0-2.115.759-3.947 2.256-5.444C11.188 3.759 13.019 3 15.135 3c.514 0 1.011.045 1.49.134zM16.292 34.972H7.64c-1.663 0-3.03-.5-4.063-1.482C2.53 32.493 2 31.142 2 29.473c0-.641.021-1.276.064-1.888.043-.624.13-1.304.259-2.02.13-.724.297-1.407.497-2.032.206-.646.487-1.283.835-1.894a7.15 7.15 0 0 1 1.258-1.64 5.547 5.547 0 0 1 1.81-1.137 6.243 6.243 0 0 1 2.308-.419c.326 0 .642.134 1.25.531.382.248.82.531 1.306.841.418.267.986.517 1.686.743.681.22 1.372.333 2.054.334v10.816c0 1.204.355 2.324.965 3.264z"
          ></path>
        </g>
      </g>
    </g>
  </svg>
);
