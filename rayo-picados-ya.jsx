import PropTypes from "prop-types";

const SVGRayo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="171.7087 184.7239 42.8604 76.6751"
    width="42.8604px"
    height="76.6751px"
    {...props}
  >
    <defs>
      <linearGradient
        id={props.uniqueGradientId}
        gradientUnits="userSpaceOnUse"
        x1={26.501}
        y1={9.5}
        x2={26.501}
        y2={81.5}
        spreadMethod="pad"
        gradientTransform="matrix(0.999989, -0.004696, 0.003449, 0.734429, -0.280799, 21.768496)"
      >
        <stop
          offset={0}
          style={{
            stopColor: props.fromColor || "#fff",
          }}
        />
        <stop
          offset={1}
          style={{
            stopColor: props.toColor || "#fff",
          }}
        />
      </linearGradient>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)">
      <path
        style={{
          opacity: 0.984,
          strokeWidth: 0,
          stroke: `url(#${props.uniqueGradientId})`,
          fillRule: "nonzero",
          fill: `url(#${props.uniqueGradientId})`,
        }}
        d="M 41.5 10.5 C 39.742 19.366 37.742 28.2 35.5 37 C 35.47 39.967 37.04 42.091 39.5 43.5 C 41.537 44.847 43.584 46.133 45.509 47.519 C 45.6 47.77 46.881 49.869 45 52.5 C 34.667 62.167 24.306 71.86 13.973 81.527 C 13.238 82.01 13.205 80.71 13.529 78.516 C 15.196 70.516 15.833 61.5 17.5 53.5 C 17.423 51.701 16.891 50.002 15.968 48.468 C 7.803 41.068 9.662 43.05 7.767 40.999 C 7.21 40.442 7.297 38.863 7.508 38.492 C 10.239 34.758 32.269 14.453 40 9.5 C 40.765 9.57 41.265 9.903 41.5 10.5 Z"
      />
    </g>
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)">
      <path
        style={{
          opacity: 0.004,
        }}
        fill="#000000"
        d="M 19.5,27.5 C 19.1667,28.5 18.5,29.1667 17.5,29.5C 17.5,28.1667 18.1667,27.5 19.5,27.5 Z"
      />
    </g>
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)">
      <path
        style={{
          opacity: 0.054,
        }}
        fill="#191919"
        d="M 41.5 10.5 C 43.876 11.512 44.876 13.345 44.5 16 C 42.392 25.317 40.725 34.483 39.5 43.5 C 36.969 42.117 35.358 40.055 35.5 37 C 37.742 28.2 39.742 19.366 41.5 10.5 Z"
      />
    </g>
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)">
      <path
        style={{
          opacity: 0.108,
        }}
        fill="#181818"
        d="M 7.441 38.421 C 7.284 39.794 7.279 40.368 8.094 41.407 C 10.057 43.256 8.16 41.391 15.903 48.5 C 16.826 50.034 17.423 51.701 17.5 53.5 C 15.833 61.5 14.936 72.576 13.269 80.576 C 13.246 82.143 12.977 80.4 14 81.5 C 24.333 71.833 34.667 62.167 45 52.5 C 46.187 51.039 46.354 49.373 45.5 47.5 C 49.575 48.921 48.714 53.694 46.574 56.361 C 17.159 83.087 46.654 56.204 16.968 82.855 C 11.045 88.173 9.955 86.609 10.933 81.648 C 13.113 72.384 14.531 60.175 15.266 52.163 C 14.498 48.264 10.286 46.939 7.39 44.685 C 5.497 43.607 5.107 42.349 5.885 41.084 C 7.484 38.483 5.895 41.162 7.441 38.421 Z"
      />
    </g>
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)" />
    <g transform="matrix(1, 0, 0, 1, 166.20076, 175.223923)" />
  </svg>
  
);

SVGRayo.propTypes = {
  uniqueGradientId: PropTypes.string.isRequired,
  fromColor: PropTypes.string,
  toColor: PropTypes.string,
};

export default SVGRayo;
