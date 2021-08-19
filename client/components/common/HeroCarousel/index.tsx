import { useState, useEffect, ReactElement } from "react";
import styles from "./Herocarousel.module.css";

interface HeroCarouselProps {
  children: ReactElement[]
}

const HeroCarousel = ({ children }: HeroCarouselProps) => {
  const [indexHero, setIndexHero] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndexHero(iH => (iH + 1) % children.length), 5000);
    return () => clearInterval(interval)
  }, [])

  return <div className={styles.main}>{children[indexHero]}</div>;
};

export default HeroCarousel;
