import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { categories } from "./constant";

export default function CategorySelector({
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
            prev + itemsPerLine >= categories.length ? 0 : prev + itemsPerLine
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? categories.length - itemsToShow : prev - itemsPerLine
        );
    };

    const visibleCategories = categories.slice(
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
            <div className="flex items-center flex-wrap justify-between mb-5">
                <h2 className="text-[16px] font-medium text-gray-700">
                    Select your categories
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
                    {visibleCategories.map((category, index) => (
                        <div
                            key={index}
                            onClick={() => handleCategoryClick(category)}
                            className={`flex-1 px-[18px] py-[20px] rounded-[7px] h-[140px] min-w-[234px] cursor-pointer transition-all duration-200
                                border ${selectedCategories.includes(category)
                                    ? "border-[#008AAB] bg-[#ebf2f7]"
                                    : "border-[#979797] hover:border-[#008AAB] bg-white hover:shadow-md"
                                }
                            `}
                        >
                            <div className="flex flex-col items-start text-start gap-[7px]">
                                {category.icon}
                                <h3 className="text-[12px] font-semibold">{category.name}</h3>
                                <p className="text-[10px] truncate w-full">
                                    {category.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {startIndex !== 0 && (
                    <button
                        type="button"
                        title="Previous"
                        onClick={prevSlide}
                        className="absolute -left-2 md:-left-10 xl:-left-16 top-1/2 -translate-y-1/2 bg-white border-[1px] border-[#008AAB] rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronLeft className="w-5 h-5 text-[#008AAB]" />
                    </button>
                )}

                {categories?.length - itemsToShow > startIndex && (
                    <button
                        type="button"
                        title="Next"
                        onClick={nextSlide}
                        className="absolute -right-2 md:-right-10 xl:-right-16 top-1/2 -translate-y-1/2 bg-white  border-[1px] border-[#008AAB] rounded-full p-2 hover:bg-gray-50"
                    >
                        <ChevronRight className="w-5 h-5 text-[#008AAB]" />
                    </button>
                )}
            </div>
        </div>
    );
}
