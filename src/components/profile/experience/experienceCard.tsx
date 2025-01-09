
export interface Experience {
    id: number;
    role: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    duration: string;
    description: string;
    skills: string[];
    logoUrl: string;
}

interface ExperienceCardProps {
    last?: boolean;
    experience: Experience;
}

export function ExperienceCard({ experience, last = false }: ExperienceCardProps) {
    return (
        <div className={`bg-white pb-[16px] pt-[18px] rounded-[8px] flex gap-4 ${!last && "border-b-[1px] border-[#F4F4F4]"}`}>
            <div className="flex-shrink-0">
                <img
                    src={experience.logoUrl}
                    alt={experience.company}
                    className="w-12 h-12 rounded-full object-cover"
                />
            </div>

            <div className="flex-1">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-[16px] font-[400] text-[#181818]">{experience.role}</h3>
                        <p className="text-[12px] text-[#575757]">
                            {experience.company} · {experience.location}
                        </p>
                    </div>

                </div>

                <div className="mt-2 flex flex-row gap-[8px]">
                    <p className="text-[14px] text-gray-600">
                        {experience.startDate} — {experience.endDate}
                    </p>
                    <div className="text-[14px] text-[#018AAF] flex items-center">
                        {experience.duration}
                    </div>
                </div>

                <p className="mt-3 text-sm text-gray-700">
                    {experience.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                        <span
                            key={skill}
                            className="inline-flex items-center px-[16px] py-[8px] text-sm font-medium bg-gray-100 rounded-full text-gray-800"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}