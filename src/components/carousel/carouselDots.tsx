
interface CarouselDotsProps {
    total: number;
    currentIndex: number;
    onSelect: (index: number) => void;
}

export function CarouselDots({ total, currentIndex, onSelect }: CarouselDotsProps) {
    return (
        <div className="absolute bottom-[84px] left-1/2 -translate-x-1/2 flex gap-2">
            {Array.from({ length: total }, (_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`w-[8px] h-[8px] rounded-full transition-all ${currentIndex === index ? 'bg-white !w-[24px] h-[8px]' : 'bg-white/50'
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );
}