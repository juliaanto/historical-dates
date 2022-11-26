import { useEffect, useState } from 'react';
import { WIDTH } from '../data/width';

const useViewport = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const isMobile = viewportWidth < WIDTH.desktop;

  const handleWindowResize = () => setViewportWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return isMobile;
};

export default useViewport;
