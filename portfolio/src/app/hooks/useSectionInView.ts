import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export const useSectionInView = (threshold = 0.3) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return { ref, controls };
};