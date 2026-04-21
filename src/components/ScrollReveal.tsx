import { type ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
}

const ScrollReveal = ({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const baseStyle = {
    transitionDelay: `${delay}s`,
    transitionDuration: "0.7s",
    transitionProperty: "opacity, transform",
    transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  };

  const hiddenStyle = direction === "up"
    ? { opacity: 0, transform: "translateY(30px)" }
    : { opacity: 0 };

  const visibleStyle = direction === "up"
    ? { opacity: 1, transform: "translateY(0)" }
    : { opacity: 1 };

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...baseStyle, ...(isVisible ? visibleStyle : hiddenStyle) }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
