"use client";

import AppCard from "@/components/cards/app-card";
import ExploreMoreCard from "@/components/cards/explore-more-card";
import ImageCard from "@/components/cards/image-card";
import InformationCard from "@/components/cards/information-card";

const ComponentDemo: React.FC = () => {
  const infoCard = {
    title: {
      text: "Apps bundled with",
      icon: {
        src: "https://picsum.photos/200/300",
        alt: "test",
      },
    },
    badge: [
      {
        icon: {
          src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
          alt: "test",
        },
        text: "<span style='color:#01BF55'>Savings up to RM24/mth</span>",
        bgColor: "linear-gradient(140.08deg, #FFF9D3 -3.7%, #C3F2D7 105.58%)",
      },
      {
        icon: {
          src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
          alt: "test2",
        },
        text: "<span style='color:#FC0114'>Hassle free, all-in-one bill</span>",
        bgColor: "linear-gradient(140.08deg, #FFF9D3 -3.7%, #FFE6CC 105.58%)",
      },
    ],
    info: [
      {
        icon: {
          src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
          alt: "test",
        },
        text: "Cancel anytime",
      },
      {
        icon: {
          src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
          alt: "test",
        },
        text: "Flexibility to switch app subscription",
      },
      {
        icon: {
          src: "https://dj7fdt04hl8tv.cloudfront.net/acm/media/icons/group.svg",
          alt: "test",
        },
        text: "Choose from over 10",
      },
    ],
  };

  const exploreMoreCard = {
    text: "Explore more",
    onClick: () => {},
  };

  const imageCard = {
    image: {
      src: "https://picsum.photos/200/300",
      alt: "test",
    },
  };
  const appCard = {
    icon: {
      src: "https://picsum.photos/200/300",
      alt: "test",
    },
    price: {
      display: "+RM00.00/mth",
      rrp: "RRP: RM0.00",
    },
    title: "Netflix",
    description: "Watch your favourite movies and TV shows",
    poster: {
      src: "https://picsum.photos/200/300",
      alt: "test",
    },
    ctaButton: {
      text: "Get it with Astro ONE",
      onClick: () => {},
    },
  };

  return (
    <div className="flex flex-wrap gap-4">
      <InformationCard {...infoCard} />
      <ExploreMoreCard {...exploreMoreCard} />
      <ImageCard {...imageCard} />
      <AppCard {...appCard} />
    </div>
  );
};

export default ComponentDemo;
