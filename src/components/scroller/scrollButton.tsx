import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ScrollButtonProps {
    direction: 'left' | 'right';
    onClick: () => void;
}

export function ScrollButton({ direction, onClick }: ScrollButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`absolute top-1/2 -translate-y-2/3 bg-white rounded-full shadow-lg p-1.5 hover:bg-gray-50 transition-colors ${direction === 'right' ? '!-end-5' : '!-start-5'} z-10`}
            style={{ [direction]: '0.5rem' }}
            aria-label={`Scroll ${direction}`}
        >
            {direction === 'left' ? (
                <ChevronLeft className="w-5 h-5 text-gray-600" />
            ) : (
                <ChevronRight className="w-5 h-5 text-gray-600" />
            )}
        </button>
    );
}