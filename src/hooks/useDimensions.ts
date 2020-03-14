import { useState, useEffect } from 'react';

type Dimensions = {
  width: number;
  height: number;
};

export function getCurrentDimensions(): Dimensions {
  return { width: window.innerWidth, height: window.innerHeight };
}
export function useDimensions() {
  const [dimensions, setDimensions] = useState(getCurrentDimensions());
  useEffect(() => {
    const onResize = () => setDimensions(getCurrentDimensions());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return dimensions;
}
