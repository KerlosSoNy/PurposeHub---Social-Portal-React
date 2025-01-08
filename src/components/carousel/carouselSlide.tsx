import { CarouselImage } from "./type";

interface CarouselSlideProps {
    image: CarouselImage;
    index: number;
}

export function CarouselSlide({ image, index }: CarouselSlideProps) {
    return (
        <div
            className={`absolute flex  flex-col items-center left-0 gap-[80px] w-full ${image?.extraUrl ? "pt-[190px]" : image?.signUp ? "pt-[14.5vh]" : "pt-[12vh]"}`}
            style={{ transform: `translateX(${index * 100}%)` }}
        >
            <img
                src={image.url}
                alt={image.alt}
                className={`${image?.extraUrl ? "max-w-[306px] h-[345px] 3xl:h-[400px] " : "max-w-[420px] h-[440px] 3xl:h-[495px]"} object-fit`}
            />
            {
                image?.extraUrl && (
                    <img
                        src={image.extraUrl}
                        alt={image.extraUrl}
                        className="absolute max-w-[187px] h-[167px] object-fit top-10 right-16"
                    />
                )
            }
            {(image.title || image.description) && (
                <div className={` text-white text-center max-w-[80%] ${image?.extraUrl ? "-mt-[3.5rem]" : "-mt-20"}`}>
                    {image.title && (
                        <h3 className="text-[36px] 2xl:text-[40px] font-bold mb-0 xl:mb-[12px] 2xl:mb-[24px">{image.title}</h3>
                    )}
                    {image.description && (
                        <p className="text-[23px] 2xl:text-[24px] font-[400]">{image.description}</p>
                    )}
                </div>
            )}
        </div>
    );
}