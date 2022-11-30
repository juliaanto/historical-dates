import { useEffect, useState } from 'react';
import { WIDTH } from '../data/width';

const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const isMobile = viewportWidth < WIDTH.desktop;

  const handleWindowResize = () => {
    setViewportWidth(window.innerWidth);

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return isMobile;
};

export default useViewport;
