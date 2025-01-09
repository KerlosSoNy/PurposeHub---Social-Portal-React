import { Experience, ExperienceCard } from './experienceCard';

interface ExperienceListProps {
    experiences: Experience[];
    title?: string;
}

export function ExperienceList({ experiences, title = "Experiences" }: ExperienceListProps) {
    return (
        <div className="bg-white rounded-[20px] pt-[25px] ps-[23px] pe-[29px] pb-[19px]">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-[18px] font-semibold text-[#181818] mb-[6.12px]">{title}</h2>

                <div className="">
                    {experiences.map((experience, index) => (
                        <ExperienceCard last={index === experiences.length - 1} key={experience.id} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}