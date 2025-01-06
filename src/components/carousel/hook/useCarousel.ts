import { useState, useCallback, useEffect } from 'react';

export function useCarousel(totalSlides: number, autoPlayInterval: number = 5000) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  }, [totalSlides]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(intervalId);
  }, [nextSlide, autoPlayInterval]);

  return {
    currentIndex,
    nextSlide,
    previousSlide,
    goToSlide,
  };
}