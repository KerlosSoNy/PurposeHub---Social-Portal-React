import { ExperienceList } from "./experienceList";

export default function ExperienceComponent() {
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
        <div className="w-[90vw] flex flex-col md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl">
            <ExperienceList
                experiences={experiences}
                title="Experiences"
            />
        </div>
    )
}
