import AppCard from "./app-card";
import ExploreMoreCard from "./explore-more-card";
import ImageCard from "./image-card";
import InformationCard from "./information-card";
import { Cards } from "./types";

interface CardTypeConverterProps {
  cardConfig: Cards;
}

const CardTypeConverter: React.FC<CardTypeConverterProps> = ({ cardConfig }) => {
  switch (cardConfig.type) {
    case "info":
      return <InformationCard {...cardConfig} />;
    case "image":
      return <ImageCard {...cardConfig} />;
    case "explore":
      return <ExploreMoreCard {...cardConfig} />;
    case "app":
      return <AppCard {...cardConfig} />;
    default:
      return null;
  }
};

export default CardTypeConverter;
