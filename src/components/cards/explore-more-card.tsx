import { cn, SearchIcon } from "acm-components";
import CardLayout from "../ui/card-layout";

export interface ExploreMoreCardProps {
  text: string;
  onClick: () => void;
  cardLayoutClassName?: string;
}

const ExploreMoreCard: React.FC<ExploreMoreCardProps> = ({ text, onClick, cardLayoutClassName }) => (
  <button type="button" className="rounded-lg" onClick={onClick}>
    <CardLayout
      // expose the className prop since content visual cards might have different size on mobile
      className={cn("flex h-[386px] w-[260px] flex-col items-center justify-center gap-2", cardLayoutClassName)}
    >
      <SearchIcon height={48} width={48} className="h-12 w-12 text-blue-v2-60" />
      <p className="text-blue-v2-60 ty-heading5">{text}</p>
    </CardLayout>
  </button>
);

export default ExploreMoreCard;
