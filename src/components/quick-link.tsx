"use client";

import { useEffect, useState } from "react";
import { Link } from "acm-components";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";

interface QuickLinkProps {
  links: {
    text: string;
    link: string;
  }[];
}

const QuickLink: React.FC<QuickLinkProps> = ({ links }) => {
  const [emblaApi, setEmblaApi] = useState<CarouselApi>();
  const [isScrollable, setIsScrollable] = useState(emblaApi && emblaApi.internalEngine().scrollSnaps.length > 1);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on("resize", () => {
        setIsScrollable(emblaApi.internalEngine().scrollSnaps.length > 1);
      });
    }
  }, [emblaApi]);

  return (
    <Carousel
      setApi={setEmblaApi}
      opts={{
        align: "end",
        dragFree: true,
        watchDrag: isScrollable,
      }}
    >
      <CarouselContent className="flex">
        {links.map((link, index) => (
          <CarouselItem key={link.text} className="basis-auto pl-0 text-white">
            <Link href={link.link} className="ty-footnote hover:underline">
              {link.text}
            </Link>
            {index < links.length - 1 && <span className="mx-4 md-v2:mx-8">|</span>}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default QuickLink;
