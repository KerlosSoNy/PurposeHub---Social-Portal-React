import { useRef, useState, useEffect } from 'react';
import { ScrollButton } from './scrollButton';
import { StoryCircle } from './storyCircle';
import { stories } from './constant';
import './style.css';


const SCROLL_AMOUNT = 300;

export function StoriesBar() {
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
        <div className="bg-white rounded-[20px] shadow-lg py-4 w-[90vw] md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl mx-auto relative">
            {showLeftButton && <ScrollButton direction="left" onClick={() => scroll('left')} />}
            {showRightButton && <ScrollButton direction="right" onClick={() => scroll('right')} />}

            <div
                ref={scrollContainerRef}
                className="flex space-x-4 overflow-x-auto pb-2 ps-[20px] pe-[20px] scrollbar-hide scroll-smooth"
                onScroll={checkScroll}
            >
                <div className="flex relative flex-col items-center space-y-1">
                    <div className={` p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full w-[70px] h-[70px] overflow-hidden`}>
                        <div className="bg-white p-[2px] rounded-full">
                            <img
                                alt="Omar Ashraf's story"
                                src={'/icons/person.png'}
                                className="w-[62px] h-[62px] rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            />
                        </div>
                    </div>
                    <div className='absolute bottom-2 flex flex-col items-center justify-center  left-[50%] translate-x-[-50%] text-white text-3xl rounded-full pb-1 border-[2px] px-1.5 h-7 bg-[#018AAF]'>
                        <span className='ps-[1px] text-[17px]'>
                            +
                        </span>
                    </div>
                </div>
                {stories.map((story) => (
                    <div key={story.username} className="flex-shrink-0">
                        <StoryCircle
                            username={story.username}
                            imageUrl={story.imageUrl}
                            hasNewStory={story.hasNewStory}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}