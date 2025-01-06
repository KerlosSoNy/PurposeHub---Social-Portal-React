export interface CarouselImage {
    url: string;
    alt: string;
    title?: string;
    description?: string;
  }
  
  export interface CarouselProps {
    images: CarouselImage[];
    autoPlayInterval?: number;
  }