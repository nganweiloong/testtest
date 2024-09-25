import { AppCardProps } from "./app-card";
import { ExploreMoreCardProps } from "./explore-more-card";
import { ImageCardProps } from "./image-card";
import { InformationCardProps } from "./information-card";

interface InformationCard extends InformationCardProps {
  type: "info";
}

interface ImageCard extends ImageCardProps {
  type: "image";
}

interface ExploreMoreCard extends ExploreMoreCardProps {
  type: "explore";
}

interface AppCard extends AppCardProps {
  type: "app";
}

export type Cards = InformationCard | ImageCard | ExploreMoreCard | AppCard;
