import React from 'react';

interface Company {
    name: string;
    logo: string;
}

interface WorkInfoProps {
    companies: Company[];
}

export function WorkInfo({ companies }: WorkInfoProps) {
    return (
        <div className="px-4 mt-4 flex items-center gap-2 me-[8px]">
            <div className="flex  flex-col items-start gap-2">
                {companies.map((company) => (
                    <React.Fragment key={company.name}>
                        <div className="flex items-center gap-[8px]">
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="w-[32px] h-[32px] rounded"
                            />
                            <span className="text-[14px] font-semibold text-[#000000]/[0.9]">{company.name}</span>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}