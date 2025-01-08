import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { LargeCategory } from "../constant";

export default function LargeCategorySelector({
    setSelectedCategories,
    selectedCategories,
}: {
    setSelectedCategories: (categories: any[]) => void;
    selectedCategories: any[];
}) {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    const [startIndex, setStartIndex] = useState(0);
    const [itemsPerLine, setItemsPerLine] = useState(4)
    const [linesToShow, setLinesToShow] = useState(2)
    const [itemsToShow, setItemsToShow] = useState(itemsPerLine * linesToShow)

    useEffect(() => {
        if (screenWidth < 500) {
            setItemsPerLine(1)
            setLinesToShow(1)
            setItemsToShow(1 * 1);
        } else if (screenWidth < 900) {
            setItemsPerLine(3)
            setItemsToShow(2 * 3);
        } else {
            setItemsPerLine(3)
            setItemsToShow(2 * 3);
        }
    }, [screenWidth, linesToShow]);

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + itemsPerLine >= LargeCategory.length
                ? 0
                : prev + itemsPerLine
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev - itemsPerLine < 0
                ? Math.max(0, LargeCategory.length - itemsToShow)
                : prev - itemsPerLine
        );
    };

    // Calculate visible categories
    const visibleCategories = LargeCategory.slice(
        startIndex,
        startIndex + itemsToShow
    );

    const handleCategoryClick = (category: any) => {
        if (selectedCategories.includes(category)) {
            // Deselect the category
            setSelectedCategories(
                selectedCategories.filter((selected) => selected !== category)
            );
        } else {
            // Add the category
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-5 flex-wrap">
                <h2 className="text-[16px] font-medium text-gray-700">
                    Select your courses
                    <span className="font-[400]">(minimum 3)</span>
                </h2>
                <button className="text-blue-500 text-sm">Explore More</button>
            </div>

            <div className="relative px-10 md:px-0">
                <div
                    className={`grid gap-4`}
                    style={{
                        gridTemplateColumns: screenWidth < 500 ? "repeat(1, 1fr)" : screenWidth < 900 ? "repeat(3, 1fr)" : "repeat(3, 1fr)",
                        gridTemplateRows: `repeat(${linesToShow}, minmax(0, 1fr))`,
                    }}>
                    {visibleCategories.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(card)}
                            className={`flex-1 px-[18px] py-[20px] rounded-[16px] cursor-pointer transition-all duration-200
                                border ${selectedCategories?.includes(card)
                                    ? "border-[#008AAB] shadow-lg bg-[#ebf2f7]"
                                    : "border-[#979797] hover:border-[#008AAB] hover:shadow-md bg-white"
                                }
                            `}
                        >
                            <img
                                src={card.image}
                                alt={card.subtitle}
                                className="w-full h-[170px] object-cover rounded-t-lg"
                            />
                            <div className="mt-[22px]">
                                <div className="flex flex-row flex-wrap md:flex-nowrap justify-between items-start">
                                    <div>
                                        <h2 className="text-lg font-bold text-black">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm text-black">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(card.rating)].map((_, i) => (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.62796 4.50731C8.6835 2.61376 9.21127 1.66699 10.0003 1.66699C10.7894 1.66699 11.3171 2.61376 12.3727 4.5073L12.6458 4.99719C12.9457 5.53527 13.0957 5.80431 13.3295 5.98183C13.5634 6.15935 13.8546 6.22524 14.4371 6.35703L14.9674 6.47702C17.0171 6.94079 18.042 7.17267 18.2858 7.95677C18.5296 8.74086 17.831 9.55788 16.4336 11.1919L16.0721 11.6147C15.675 12.079 15.4764 12.3112 15.3871 12.5984C15.2978 12.8857 15.3278 13.1954 15.3878 13.815L15.4425 14.379C15.6538 16.5592 15.7594 17.6492 15.121 18.1338C14.4827 18.6184 13.5231 18.1766 11.6039 17.293L11.1074 17.0644C10.5621 16.8133 10.2894 16.6877 10.0003 16.6877C9.71128 16.6877 9.4386 16.8133 8.89323 17.0644L8.39672 17.293C6.47755 18.1766 5.51797 18.6184 4.87962 18.1338C4.24126 17.6492 4.34689 16.5592 4.55816 14.379L4.61281 13.815C4.67285 13.1954 4.70286 12.8857 4.61354 12.5984C4.52422 12.3112 4.32568 12.079 3.92859 11.6147L3.56707 11.1919C2.1697 9.55789 1.47101 8.74086 1.71484 7.95677C1.95867 7.17267 2.98354 6.94079 5.03327 6.47702L5.56356 6.35703C6.14603 6.22524 6.43727 6.15935 6.67111 5.98183C6.90495 5.80431 7.05493 5.53527 7.35488 4.99719L7.62796 4.50731Z" fill="#FFCC00" />
                                            </svg>

                                        ))}
                                    </div>
                                </div>
                                <div className="mt-[22px] flex items-center">
                                    <img
                                        src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        alt={card.author}
                                        className="w-6 h-6 rounded-full mr-2"
                                    />
                                    <span className="text-sm text-[#9AA0A6]">
                                        {card.author}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {startIndex > 0 && (
                    <button
                        type="button"
                        title="Previous"
                        onClick={prevSlide}
                        className="absolute -left-2 md:-left-10 xl:-left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                )}

                {startIndex + itemsToShow < LargeCategory.length && (
                    <button
                        type="button"
                        title="Next"
                        onClick={nextSlide}
                        className="absolute -right-2 md:-right-10 xl:-right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                )}
            </div>
        </div>
    );
}
