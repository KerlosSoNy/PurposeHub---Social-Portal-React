import { CarouselImage } from "./type";

interface CarouselSlideProps {
    image: CarouselImage;
    index: number;
}

export function CarouselSlide({ image, index }: CarouselSlideProps) {
    return (
        <div
            className="absolute flex  flex-col justify-center items-center top-0 left-0 w-full h-[calc(100vh-64px)]"
            style={{ transform: `translateX(${index * 100}%)` }}
        >
            <img
                src={image.url}
                alt={image.alt}
                className="w-[405px] h-[445px] object-scale-down"
            />
            {(image.title || image.description) && (
                <div className=" text-white text-center max-w-[80%]">
                    {image.title && (
                        <h3 className="text-[40px] font-bold mb-[18px]">{image.title}</h3>
                    )}
                    {image.description && (
                        <p className="text-[24px]">{image.description}</p>
                    )}
                </div>
            )}
        </div>
    );
}