"use client";

import { forwardRef, useRef, useState } from "react";
import { cn } from "acm-components";
import { motion } from "framer-motion";
import TriggerComponent from "./components/trigger-component";
import WhyUsPage from "./components/why-us-page";
import { pageConfig } from "./data/why-us-config";

interface WhyUsSectionProps {
  isMainInView: boolean;
}

const WhyUsSection = forwardRef<HTMLDivElement, WhyUsSectionProps>(({ isMainInView }, ref) => {
  // Mock Data
  const whyUsPageConfig = pageConfig;

  // Fade In Out
  const pageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [targetInView, setTargetInView] = useState<boolean[]>([]);
  const prevTargetInView = useRef<boolean[]>(targetInView);

  const contentAnimation = {
    fadeIn: {
      opacity: 1,
      transition: {
        duration: 1,
      },
      zIndex: 10,
    },
    fadeOut: {
      opacity: 0,
      zIndex: -10,
    },
    slideUp: {
      transition: {
        duration: 0.5,
        type: "spring",
        mass: 1.5,
        bounce: 0.75,
      },
    },
  };

  return (
    <div className="relative md-v2:mb-8" ref={ref}>
      <motion.div className="sticky top-0 min-h-svh" whileInView="slideUp" variants={contentAnimation}>
        {whyUsPageConfig.map((config, index) => (
          <motion.div
            layout
            className="absolute top-0 min-h-svh w-full opacity-0"
            key={config.title}
            ref={(el) => {
              pageRefs.current[index] = el;
            }}
            variants={contentAnimation}
            animate={{
              opacity: targetInView[index] || (isMainInView && index === 0) ? 1 : 0,
              zIndex: targetInView[index] ? 10 : -10,
              y: isMainInView && index === 0 ? 200 : 0,
            }}
            transition={{ duration: 1 }}
          >
            <WhyUsPage pageConfig={config} />
          </motion.div>
        ))}
      </motion.div>
      {whyUsPageConfig.map((config, index) => (
        <TriggerComponent
          key={config.title}
          height={pageRefs.current[index]?.clientHeight ?? 0}
          classname={cn("snap-start snap-always")}
          setIsInView={(isTriggerInView) => {
            if (targetInView[index] === isTriggerInView) return;
            prevTargetInView.current = targetInView;
            setTargetInView((prev) => {
              const newTargets = [...prev];
              newTargets[index] = isTriggerInView;
              return newTargets;
            });
          }}
        />
      ))}
    </div>
  );
});

export default WhyUsSection;
