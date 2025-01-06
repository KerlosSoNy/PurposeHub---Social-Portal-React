import { useCarousel } from './hook/useCarousel';
import { CarouselProps } from './type';
import { CarouselSlide } from './carouselSlide';
import { CarouselDots } from './carouselDots';

export function Carousel({ images, autoPlayInterval = 5000, classes }: CarouselProps) {
    const { currentIndex, goToSlide } = useCarousel(
        images.length,
        autoPlayInterval
    );

    return (
        <div className={`relative w-full max-w-4xl mx-auto h-full px-[58px] pb-[18px]  overflow-hidden rounded-xl ${classes}`}>
            <div
                className="w-full h-full transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <CarouselSlide key={index} image={image} index={index} />
                ))}
            </div>

            {/* <CarouselNavigation
                onPrevious={previousSlide}
                onNext={nextSlide}
            /> */}

            <CarouselDots
                total={images.length}
                currentIndex={currentIndex}
                onSelect={goToSlide}
            />
        </div>
    );
}