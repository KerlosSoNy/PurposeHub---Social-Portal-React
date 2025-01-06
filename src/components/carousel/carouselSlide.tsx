import { CarouselImage } from "./type";

interface CarouselSlideProps {
    image: CarouselImage;
    index: number;
}

export function CarouselSlide({ image, index }: CarouselSlideProps) {
    return (
        <div
            className="absolute top-0 left-0 w-full h-full"
            style={{ transform: `translateX(${index * 100}%)` }}
        >
            <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
            />
            {(image.title || image.description) && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    {image.title && (
                        <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    )}
                    {image.description && (
                        <p className="text-sm">{image.description}</p>
                    )}
                </div>
            )}
        </div>
    );
}