import React, { forwardRef } from "react";
import { cn } from "acm-components";
import CardTypeConverter from "@/components/cards/card-type-converter";
import ExploreMoreCard from "@/components/cards/explore-more-card";
import QuickLink from "@/components/quick-link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { WhyUsPageConfig } from "../types";

interface WhyUsPageProps {
  pageConfig: WhyUsPageConfig;
}

const WhyUsPage = forwardRef<HTMLDivElement, WhyUsPageProps>(({ pageConfig }, ref) => {
  const isAppOrInfoContent = pageConfig.contentCards.some((card) => card.type === "app" || card.type === "info");
  return (
    <div ref={ref}>
      {/* Fake height - 56px padding for header + 32px  for spacing above header */}
      <div className="mb-8 h-14" />
      <div className="container-v2 grid grid-cols-4 items-center gap-4 md:grid-cols-12">
        <div className="col-span-full md:col-start-3">
          <p className="mb-1 text-white ty-caption">{pageConfig.label}</p>
          <h1 className="mb-3 text-white ty-heading1 md:ty-heading2">{pageConfig.title}</h1>
        </div>
        <Carousel
          className="col-span-full w-full md:col-start-3"
          opts={{
            align: "center",
            dragFree: true,
          }}
        >
          <CarouselContent className="gap-2 md:gap-4" containerClassname="overflow-visible">
            {pageConfig.contentCards.map((card) => {
              const key = card.type === "app" ? card.title : card.type === "info" ? card.title.text : card.image.alt;
              return (
                <CarouselItem
                  key={key}
                  className={cn("basis-[260px] pl-0", !isAppOrInfoContent && "max-md:basis-[241px]")}
                >
                  <CardTypeConverter cardConfig={card} />
                </CarouselItem>
              );
            })}
            <CarouselItem className={cn("basis-[260px] pl-0", !isAppOrInfoContent && "max-md:basis-[241px]")}>
              <ExploreMoreCard
                {...pageConfig.exploreMoreCard}
                cardLayoutClassName={cn(!isAppOrInfoContent && "max-md:h-[358px]")}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="absolute bottom-7 w-full">
        <div className="container-v2 relative grid grid-cols-4 gap-4 md:grid-cols-12">
          <div className="col-span-full md:col-start-3">
            <QuickLink links={pageConfig.links} />
          </div>
        </div>
      </div>
    </div>
  );
});

WhyUsPage.displayName = "WhyUsPage";

export default WhyUsPage;
