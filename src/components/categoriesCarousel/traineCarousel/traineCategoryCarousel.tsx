import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { categories, expertCards } from "../constant";

export default function TraineCategorySelector({
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
    const [itemsPerLine] = useState(4)
    const [linesToShow] = useState(2)
    const [itemsToShow, setItemsToShow] = useState(itemsPerLine * linesToShow)

    useEffect(() => {
        if (screenWidth < 500) {
            setItemsToShow(linesToShow * 1);
        } else if (screenWidth < 900) {
            setItemsToShow(linesToShow * 3);
        } else {
            setItemsToShow(linesToShow * 4);
        }
    }, [screenWidth, linesToShow]);

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + itemsPerLine >= expertCards.length ? 0 : prev + itemsPerLine
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? expertCards.length - itemsToShow : prev - itemsPerLine
        );
    };

    const visibleCategories = expertCards.slice(
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
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-medium text-gray-700">
                    Follow Top Trainers
                    <span className="font-[400]">(minimum 3)</span>
                </h2>
                <button className="text-blue-500 text-sm">
                    Explore More
                </button>
            </div>

            <div className="relative px-10 md:px-0">
                <div
                    className={`grid gap-4`}
                    style={{
                        gridTemplateColumns: screenWidth < 500 ? "repeat(1, 1fr)" : screenWidth < 900 ? "repeat(3, 1fr)" : "repeat(4, 1fr)",
                        gridTemplateRows: `repeat(${linesToShow}, minmax(0, 1fr))`,
                    }}>
                    {visibleCategories.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(card)}
                            className={`flex-1 px-[18px] py-[20px] bg-white rounded-[7px] min-w-[234px] cursor-pointer transition-all duration-200
                                border ${selectedCategories.includes(card)
                                    ? "border-[#008AAB] shadow-lg bg-[#ebf2f7]"
                                    : "border-[#979797] hover:border-[#008AAB] hover:shadow-md"
                                }
                            `}
                        >
                            <img src={card?.avatar} alt={card?.name} className="w-16 h-16 rounded-full mb-[16px]" />
                            <h2 className="text-[16px] font-semibold mb-[12px]">{card?.name}</h2>
                            <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.70001 1.6862L2.68668 4.3062C1.40001 5.1462 1.40001 7.0262 2.68668 7.8662L6.70001 10.4862C7.42001 10.9595 8.60668 10.9595 9.32668 10.4862L13.32 7.8662C14.6 7.0262 14.6 5.15287 13.32 4.31287L9.32668 1.69287C8.60668 1.21287 7.42001 1.21287 6.70001 1.6862Z" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M3.75374 8.71973L3.74707 11.8464C3.74707 12.6931 4.4004 13.5997 5.2004 13.8664L7.32707 14.5731C7.69374 14.6931 8.3004 14.6931 8.67374 14.5731L10.8004 13.8664C11.6004 13.5997 12.2537 12.6931 12.2537 11.8464V8.75306" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M14.2666 10V6" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="pt-[3px]">{card?.expertise}</span>
                            </p>
                            <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00033 7.99967C9.84127 7.99967 11.3337 6.50729 11.3337 4.66634C11.3337 2.82539 9.84127 1.33301 8.00033 1.33301C6.15938 1.33301 4.66699 2.82539 4.66699 4.66634C4.66699 6.50729 6.15938 7.99967 8.00033 7.99967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span className="pt-[3px]">{card?.followers} Followers</span>
                            </p>
                            <button
                                className={`mt-4 px-4 py-2 border-[1px] border-[#018AAF] rounded-[12px] ${selectedCategories.includes(card) ? 'text-[#018AAF] ' : ' text-[#018AAF]'
                                    }`}
                            >
                                {selectedCategories.includes(card) ? 'Followed' : 'Follow'}
                            </button>
                        </div>
                    ))}
                </div>

                {startIndex !== 0 && (
                    <button
                        type="button"
                        title="Previous"
                        onClick={prevSlide}
                        className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                )}

                {categories?.length - itemsToShow > startIndex && (
                    <button
                        type="button"
                        title="Next"
                        onClick={nextSlide}
                        className="absolute -right-16 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-5 h-5 text-gray-600" />
                    </button>
                )}
            </div>
        </div>
    );
}
