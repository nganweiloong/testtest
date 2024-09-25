import { useEffect, useRef } from "react";
import { cn } from "acm-components";
import { useInView } from "framer-motion";

interface TriggerComponentProps {
  height: number;
  setIsInView: (inView: boolean) => void;
  classname?: string;
}

const TriggerComponent: React.FC<TriggerComponentProps> = ({ height, setIsInView, classname }) => {
  const triggerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(triggerRef, { margin: "-100px 0px -100px 0px" });

  useEffect(() => {
    setIsInView(isInView);
  }, [isInView, setIsInView]);

  return <div style={{ height }} className={cn("-z-10", classname)} ref={triggerRef} />;
};

export default TriggerComponent;
