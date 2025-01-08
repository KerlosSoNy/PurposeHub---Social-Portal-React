import { ChevronLeft, ChevronRight, Mic, Cloud, User, Lightbulb, Image, Shield, Users, Box } from "lucide-react";
import { useState } from "react";
import { Card } from "./card";
import { cn } from "../../utils/cn/cn";

interface Category {
    icon: React.ReactNode;
    name: string;
    description: string;
}

const categories: Category[] = [
    { icon: <Mic className="w-6 h-6 text-blue-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Cloud className="w-6 h-6 text-gray-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <User className="w-6 h-6 text-blue-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Lightbulb className="w-6 h-6 text-blue-400" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Image className="w-6 h-6 text-blue-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Shield className="w-6 h-6 text-gray-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Users className="w-6 h-6 text-blue-500" />, name: "James Robinson", description: "I need some inspiration..." },
    { icon: <Box className="w-6 h-6 text-gray-500" />, name: "James Robinson", description: "I need some inspiration..." },
];

export function CategorySelector() {
    const [startIndex, setStartIndex] = useState(0);
    const itemsToShow = 4;

    const nextSlide = () => {
        setStartIndex((prev) =>
            prev + itemsToShow >= categories.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setStartIndex((prev) =>
            prev === 0 ? categories.length - itemsToShow : prev - 1
        );
    };

    const visibleCategories = categories.slice(startIndex, startIndex + itemsToShow);

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-medium text-gray-700">
                    Select your categories (minimum 3)
                </h2>
                <button className="text-blue-500 text-sm">
                    Explore More
                </button>
            </div>

            <div className="relative">
                <div className="flex gap-4">
                    {visibleCategories.map((category, index) => (
                        <Card
                            key={index}
                            className={cn(
                                "flex-1 p-4 cursor-pointer hover:border-blue-500 transition-all duration-200",
                                "border border-gray-200 hover:shadow-md"
                            )}
                        >
                            <div className="flex flex-col items-center text-center gap-2">
                                {category.icon}
                                <h3 className="text-sm font-medium">{category.name}</h3>
                                <p className="text-xs text-gray-500 truncate w-full">
                                    {category.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>

                <button
                    type="button"
                    title="Previous"
                    onClick={prevSlide}
                    className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>

                <button
                    type="button"
                    title="Next"
                    onClick={nextSlide}
                    className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50"
                >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
            </div>
        </div>
    );
}