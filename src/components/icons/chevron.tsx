import { cn } from "acm-components";
import { SvgIconProps } from "./types";

interface ChevronIconProps extends SvgIconProps {
  direction: "up" | "right" | "down" | "left";
}

const ChevronIcon: React.FC<ChevronIconProps> = ({ className, direction, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={cn(
      {
        "rotate-90": direction === "left",
        "-rotate-90": direction === "right",
        "rotate-180": direction === "up",
      },
      className
    )}
    {...props}
  >
    <path
      className="outliner"
      d="M3 5L8 11L13 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default ChevronIcon;
