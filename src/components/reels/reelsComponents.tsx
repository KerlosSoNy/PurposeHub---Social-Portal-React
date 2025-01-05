import { useRef, useState, useEffect } from 'react';
import '../scroller/style.css';
import { ScrollButton } from '../scroller/scrollButton';
import { reels } from './constnat';
import ReelCard from './reelsCard';


const SCROLL_AMOUNT = 300;

export function ReelsBar() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="rounded-[20px] md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl relative my-[16px]">
            {showLeftButton && <ScrollButton direction="left" onClick={() => scroll('left')} />}
            {showRightButton && <ScrollButton direction="right" onClick={() => scroll('right')} />}
            <div className='mb-[40px] flex flex-row justify-between items-center'>
                <span className='font-semibold text-[24px]'>Explore reels</span>
                <span className='font-medium text-[16px] text-[#018AAF]'>View all</span>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex gap-[24px] overflow-x-auto pb-2 scrollbar-hide scroll-smooth"
                onScroll={checkScroll}
            >
                {reels.map((reel, index) => (
                    <div key={index} className="flex-shrink-0">
                        <ReelCard {...reel} />
                    </div>
                ))}
            </div>
        </div>
    );
}