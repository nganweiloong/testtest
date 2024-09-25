import { ExploreMoreCardProps } from "@/components/cards/explore-more-card";
import { Cards } from "@/components/cards/types";

export interface WhyUsPageConfig {
  title: string;
  label: string;
  contentCards: Exclude<Cards, { type: "explore" }>[];
  exploreMoreCard: ExploreMoreCardProps;
  links: {
    text: string;
    link: string;
  }[];
}
