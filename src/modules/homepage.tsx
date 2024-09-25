"use client";

// TODO: Remove this eslint-disable
/* eslint-disable import/no-restricted-paths */
import { useRef } from "react";
import { useInView } from "framer-motion";
import MainSection from "./main";
import WhyUsSection from "./why-us";

const Homepage: React.FC = () => {
  const whyUsRef = useRef<HTMLDivElement>(null);
  const isWhyUsInView = useInView(whyUsRef, { margin: "-100px 0px -100px 0px" });

  const mainRef = useRef<HTMLDivElement>(null);
  const isMainSectionInView = useInView(mainRef, { margin: "-100px 0px -100px 0px" });

  return (
    <main className="h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      <div className="fixed -z-20 h-screen w-screen bg-neutral-v2-100" />
      <MainSection ref={mainRef} isWhyUsInView={isWhyUsInView} isCurrentSectionInView={isMainSectionInView} />
      <WhyUsSection ref={whyUsRef} isMainInView={isMainSectionInView} />
      <div className="h-screen snap-start snap-always text-center text-white ty-heading1">
        This is Next Or Last Section
      </div>
    </main>
  );
};

export default Homepage;
