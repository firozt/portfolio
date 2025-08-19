import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode
}

export default function FadeInOnView({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); 
          }
        });
      },
      { threshold: 0.1 } 
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{x:0,y:-50}}
      transition={{duration:1,ease:'easeIn'}}
      animate={{x:0,y:0}}
    >
      <div ref={ref} className={`fade-in ${isVisible ? "visible" : ""}`}>
        {children}
      </div>
    </motion.div>
  );
}
