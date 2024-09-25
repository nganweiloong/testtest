import { SvgIconProps } from "./types";

const SearchIcon: React.FC<SvgIconProps> = (props) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24 9.25C15.854 9.25 9.25 15.854 9.25 24S15.854 38.75 24 38.75 38.75 32.146 38.75 24 32.146 9.25 24 9.25ZM6.75 24c0-9.527 7.723-17.25 17.25-17.25 9.527 0 17.25 7.723 17.25 17.25 0 9.527-7.723 17.25-17.25 17.25-9.527 0-17.25-7.723-17.25-17.25Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.616 34.616a1.25 1.25 0 0 1 1.768 0l4.5 4.5a1.25 1.25 0 0 1-1.768 1.768l-4.5-4.5a1.25 1.25 0 0 1 0-1.768Z"
      fill="currentColor"
    />
  </svg>
);

export default SearchIcon;
