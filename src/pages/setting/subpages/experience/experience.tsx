import { Plus } from "lucide-react";
import { ExperienceCard } from "../../../../components/profile/experience/experienceCard";
import { Link } from "react-router";

export default function Experience() {
    const experiences = [
        {
            id: 1,
            role: "Senior Frontend Developer",
            company: "TechCorp",
            location: "San Francisco",
            startDate: "Jun 2021",
            endDate: "Present",
            duration: "2 yrs 8 mos",
            description: "Work with enterprise clients developing scalable web applications. Specialized in React, TypeScript, and modern frontend architecture. Lead a team of 5 developers and mentor junior engineers.",
            skills: ["React", "TypeScript", "Next.js"],
            logoUrl: "https://images.unsplash.com/photo-1635350736475-c8cef4b21906?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 2,
            role: "Frontend Developer",
            company: "StartupHub",
            location: "Remote",
            startDate: "Jan 2019",
            endDate: "May 2021",
            duration: "2 yrs 5 mos",
            description: "Developed responsive web applications and progressive web apps. Collaborated with UX designers to implement pixel-perfect interfaces and improve user experience.",
            skills: ["JavaScript", "Vue.js", "Tailwind"],
            logoUrl: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?w=64&h=64&fit=crop&auto=format"
        }
    ];
    return (
        <div className="w-[100%] md:w-[70%] shadow-sm flex flex-col px-[24px] pt-[24px] pb-[48px] bg-white h-fit rounded-[4px]">
            <div className="flex flex-row justify-between items-start">
                <div className='flex flex-col max-w-[80%] gap-[0px]'>
                    <span className='font-semibold text-[20px] text-[#0F0F0F]'>Experiences</span>
                    <span className='font-[400] text-[12px] text-[#6B7280]'>Please fill all the details of ingredients about the users</span>
                </div>
                <Link to="/settings/experiences/add" title="Add experience" type="button" className="bg-[#018AAF] w-[34px] h-[34px] rounded-[12px] flex items-center justify-center">
                    <Plus className="w-[24px] h-[24px] text-[#fff]" />
                </Link>
            </div>
            <div className="bg-white rounded-[20px] pt-[25px] ps-[23px] pe-[29px] pb-[19px]">
                <div className="max-w-3xl mx-auto">
                    <div className="">
                        {experiences.map((experience, index) => (
                            <ExperienceCard isEditable last={index === experiences.length - 1} key={experience.id} experience={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
