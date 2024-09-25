import React, { useEffect, useRef } from "react";
import { cn, ImageConfig } from "acm-components";
import { AnimatePresence, motion } from "framer-motion";
import ArrowIcon from "@/components/icons/arrow";
import Image from "@/components/image";
import MediaBackground from "@/components/media-background";
import { MediaSource } from "@/components/types";

export interface MainSectionConfig {
  background: MediaSource;
  logo: ImageConfig;
  text: string;
}

interface MainSectionProps {
  isWhyUsInView: boolean;
  isCurrentSectionInView: boolean;
}

const MainSection = React.forwardRef<HTMLDivElement, MainSectionProps>(
  ({ isWhyUsInView, isCurrentSectionInView }, ref) => {
    const mainSectionMock: MainSectionConfig = {
      background: {
        type: "video",
        src: "https://d3riyfoij6hyxp.cloudfront.net/acm/media/guided-flow-homepage-assets/221017-kids-1280x616.mp4",
        alt: "background",
        fallbackImageUrl:
          "https://dj7fdt04hl8tv.cloudfront.net/acm/media/homepage-banners/homepage_pl24_fa-desktop-eng-1280x550.jpg",
      },
      logo: {
        src: "https://picsum.photos/300/200",
        alt: "logo",
      },
      text: "Our entertainment has no limits. Dive right in.",
    };

    const videoRef = useRef<HTMLVideoElement>(null);

    const mediaTransitionVariants = {
      isWhyUsInView: {
        scale: 5,
        transition: {
          scale: { type: "spring", stiffness: 300, damping: 30 },
        },
      },
      isMainSectionInView: {
        scale: 1,
        transition: {
          scale: { type: "spring", stiffness: 230, damping: 30, mass: 1.5, bounce: 0.75 },
        },
      },
    };
    const contentTransitionVariants = {
      fadeIn: {
        opacity: 1,
        transition: {
          duration: 1,
        },
        zIndex: 10,
      },
      fadeOut: {
        opacity: 0,
        transition: {
          duration: 0.5,
        },
      },
    };

    useEffect(() => {
      if (isCurrentSectionInView) {
        videoRef.current?.play();
      } else if (isWhyUsInView) {
        videoRef.current?.pause();
      }
    }, [isWhyUsInView, isCurrentSectionInView]);

    return (
      <div className="relative mb-8 h-screen snap-start snap-always">
        <motion.div
          className={cn(
            "absolute -z-10 w-full",
            isWhyUsInView ? "fixed [&>*:first-child]:opacity-75 [&>*:first-child]:md-v2:p-0" : "absolute"
          )}
          variants={mediaTransitionVariants}
          initial="isMainSectionInView"
          animate={isWhyUsInView ? "isWhyUsInView" : "isMainSectionInView"}
        >
          <MediaBackground
            mediaSource={mainSectionMock.background}
            backgroundWrapperClassname="md-v2:p-4 [&>*:first-child]:opacity-50"
            ref={videoRef}
          />
        </motion.div>

        <AnimatePresence>
          <motion.div
            ref={ref}
            className="flex h-full w-full items-center justify-center"
            variants={contentTransitionVariants}
            animate={isWhyUsInView ? "fadeOut" : "fadeIn"}
          >
            <Image
              src={mainSectionMock.logo.src}
              alt={mainSectionMock.logo.alt}
              width={168}
              height={72}
              className="fixed aspect-video"
            />
            <div className="fixed bottom-7">
              <div className="mx-auto mb-6 flex h-5 w-3.5 items-center justify-center rounded-full bg-purple-v2-80">
                <ArrowIcon className="animate-bounce text-white" />
              </div>
              <p className="text-white ty-footnote">{mainSectionMock.text}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
);

MainSection.displayName = "MainSection";

export default MainSection;
