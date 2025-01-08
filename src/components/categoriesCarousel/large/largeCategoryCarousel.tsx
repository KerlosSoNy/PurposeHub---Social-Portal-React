import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { LargeCategory } from "../constant";

export default function LargeCategorySelector({
    setSelectedCategories,
    selectedCategories,
}: {
    setSelectedCategories: (categories: any[]) => void;
    selectedCategories: any[];
}) {
    const [startIndex, setStartIndex] = useState(0);
    const itemsPerLine = 3;
    const linesToShow = 2;
    const itemsToShow = itemsPerLine * linesToShow;

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + itemsPerLine >= LargeCategory.length
                ? 0 // Wrap around to the start
                : prev + itemsPerLine
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev - itemsPerLine < 0
                ? Math.max(0, LargeCategory.length - itemsToShow) // Wrap around to the end
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
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] font-medium text-gray-700">
                    Select your courses
                    <span className="font-[400]">(minimum 3)</span>
                </h2>
                <button className="text-blue-500 text-sm">Explore More</button>
            </div>

            <div className="relative">
                <div className="grid grid-cols-3 gap-4">
                    {visibleCategories.map((card, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(card)}
                            className={`flex-1 px-[18px] py-[20px] bg-white rounded-[16px] cursor-pointer transition-all duration-200
                                border ${selectedCategories?.includes(card)
                                    ? "border-[#008AAB] shadow-lg bg-[#ebf2f7]"
                                    : "border-[#979797] hover:border-[#008AAB] hover:shadow-md"
                                }
                            `}
                        >
                            <img
                                src={card.image}
                                alt={card.subtitle}
                                className="w-full h-[170px] object-cover rounded-t-lg"
                            />
                            <div className="p-4 mt-[22px]">
                                <div className="flex flex-row justify-between items-start">
                                    <div>
                                        <h2 className="text-lg font-bold text-gray-800">
                                            {card.title}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        {[...Array(card.rating)].map((_, i) => (
                                            <span
                                                key={i}
                                                className="text-yellow-500 text-[22px]"
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="mt-[22px] flex items-center">
                                    <img
                                        src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                        alt={card.author}
                                        className="w-6 h-6 rounded-full mr-2"
                                    />
                                    <span className="text-sm text-gray-700">
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
                        className="absolute -left-16 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                    </button>
                )}

                {startIndex + itemsToShow < LargeCategory.length && (
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
