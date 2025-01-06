import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselNavigationProps {
    onPrevious: () => void;
    onNext: () => void;
}

export function CarouselNavigation({ onPrevious, onNext }: CarouselNavigationProps) {
    return (
        <>
            <button
                onClick={onPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={onNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>
        </>
    );
}