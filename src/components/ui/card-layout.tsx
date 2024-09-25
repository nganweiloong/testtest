import { cn } from "acm-components";

interface CardLayoutProps {
  children: React.ReactNode;
  className?: string;
  backgroundImageUrl?: string;
}

const CardLayout: React.FC<CardLayoutProps> = ({ children, className, backgroundImageUrl }) => (
  <div
    className={cn("rounded-lg bg-neutral-v2-0 p-4 shadow-xl-v2 md-v2:p-6", className)}
    style={backgroundImageUrl ? { backgroundImage: `url(${backgroundImageUrl})` } : {}}
  >
    {children}
  </div>
);

export default CardLayout;
