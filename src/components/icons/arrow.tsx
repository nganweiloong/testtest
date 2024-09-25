import { SvgIconProps } from "./types";

const ArrowIcon: React.FC<SvgIconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="7" height="9" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 8.125a.625.625 0 0 1-.625-.625v-6a.625.625 0 1 1 1.25 0v6c0 .345-.28.625-.625.625Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.016 8.125a.625.625 0 0 1-.458-.183l-2.5-2.5a.625.625 0 1 1 .884-.884l2.034 2.034 1.81-2.01a.625.625 0 1 1 .929.836l-2.25 2.5a.625.625 0 0 1-.449.207Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowIcon;
