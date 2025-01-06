import React from 'react';
import { Flame, Circle, Smartphone, Layout, Coffee, ChevronRight } from 'lucide-react';

interface Course {
    id: number;
    name: string;
    instructor: string;
    icon: React.ReactNode;
    iconBg: string;
}

const courses: Course[] = [
    {
        id: 1,
        name: 'Math',
        instructor: 'Ahmed Kareem',
        icon: <Circle className="w-5 h-5 text-purple-500" />,
        iconBg: 'bg-purple-100',
    },
    {
        id: 2,
        name: 'Flutter',
        instructor: 'Mahmoud Halim',
        icon: <Smartphone className="w-5 h-5 text-blue-400" />,
        iconBg: 'bg-blue-100',
    },
    {
        id: 3,
        name: 'UI/UX',
        instructor: 'Sara Elsayed',
        icon: <Layout className="w-5 h-5 text-green-500" />,
        iconBg: 'bg-green-100',
    },
    {
        id: 4,
        name: 'Java',
        instructor: 'Omar Essam',
        icon: <Coffee className="w-5 h-5 text-yellow-500" />,
        iconBg: 'bg-yellow-100',
    },
];

export default function TrendingCourses() {
    return (
        <div className="bg-white rounded-[20px] p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6 border-b-[1px] pb-[16px]">
                <div className="flex items-center gap-2">
                    <Flame className="w-5 h-5 text-orange-500" />
                    <h2 className="text-lg font-semibold">Trending Courses</h2>
                </div>
                <button title='Next' className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-4">
                {courses.map((course) => (
                    <div key={course.id} className="flex items-center justify-between">
                        <div className="flex items-center gap-[10px]">
                            <div className={`w-[40px] h-[40px] rounded-full ${course.iconBg} flex items-center justify-center`}>
                                {course.icon}
                            </div>
                            <div>
                                <h3 className="font-medium text-[16px] text-[#6D6C6C]">{course.name}</h3>
                                <p className="text-[14px] text-[#AAAAAA]">{course.instructor}</p>
                            </div>
                        </div>
                        <button className="px-4  !h-[40px] !w-[100px]  text-[#018AAF] border border-[#018AAF]  rounded-[10px] hover:bg-blue-50 transition-colors">
                            Enroll
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
