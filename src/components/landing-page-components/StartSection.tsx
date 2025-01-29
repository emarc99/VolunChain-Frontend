import React, { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  endValue: number;
  duration?: number;
  steps?: number;
}

const CountUp: React.FC<CountUpProps> = ({
  endValue,
  duration = 2000,
  steps = 60,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasAnimated = useRef(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true;
      const stepDuration = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(easedProgress * endValue));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue, duration, steps]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

export default CountUp;