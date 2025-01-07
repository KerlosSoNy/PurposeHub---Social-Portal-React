export interface CarouselImage {
    url: string;
    alt: string;
    extraUrl?:string;
    title?: string;
    signUp?:boolean;
    description?: string;
  }
  
  export interface CarouselProps {
    images: CarouselImage[];
    classes?: string;
    autoPlayInterval?: number;
  }