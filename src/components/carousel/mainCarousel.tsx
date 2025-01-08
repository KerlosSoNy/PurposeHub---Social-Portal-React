import { Carousel } from './carouselComponent'

export default function MainCarousel({ images }: any) {
    return (
        <div className="w-[626px] z-[2] lg:w-[676px] hidden xl:flex flex-col items-center justify-center rounded-[20px] max-h-[calc(100vh-64px)] 2xl:w-[727px] gap-[32px] relative bg-gradient-to-b from-[#018AAF] to-[#46BADA]">
            <img alt="background" className="w-[100%] h-[65%] opacity-50 absolute top-0 left-0" src="/signIn/signIn-Bg.png" />
            <Carousel images={images} />
        </div>

    )
}
