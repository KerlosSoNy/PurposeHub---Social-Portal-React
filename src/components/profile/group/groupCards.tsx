
export interface Group {
    id: number;
    name: string;
    category: string;
    memberCount: string;
    logoUrl: string;
}

interface GroupCardProps {
    group: Group;
    selected: number[]
    onJoin: (groupId: number) => void;
}

export function GroupCard({ group, onJoin, selected }: GroupCardProps) {
    return (
        <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
                <div className="w-[48px] h-[48px] rounded-[8px] overflow-hidden">
                    <img
                        src={group.logoUrl}
                        alt={group.name}
                        className="w-[48px] h-[48px] object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className="text-[16px] font-semibold text-[#000000]">{group.name}</h3>
                    <p className="text-[12px] font-[400] text-[#000000]/[0.9]">
                        {group.category}
                    </p>
                    <span className="text-[12px] font-[400] text-[#000000]/[0.6]">
                        {group.memberCount} Joined
                    </span>
                </div>
            </div>
            <button
                onClick={() => onJoin(group.id)}
                className={` ${selected.includes(group.id) && "bg-[#018AAF] text-white"} 
                flex flex-row gap-[10px] rounded-full items-center border-[1px] border-[#018AAF] py-1.5 px-[20px] text-center w-[100px] duration-500 transition-all text-[16px] font-[400] text-[#018AAF]
                `}
            >
                {
                    !selected.includes(group.id) &&
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9.5" cy="10" r="8.5" stroke="#018AAF" stroke-width="2" />
                        <line x1="9.5002" y1="6" x2="9.50019" y2="14" stroke="#018AAF" stroke-width="1.6" />
                        <line x1="5.5" y1="10.0008" x2="13.5" y2="10.0008" stroke="#018AAF" stroke-width="1.6" />
                    </svg>
                }

                <span className="mx-auto">
                    {
                        selected.includes(group.id) ? "Joined" : "Join"
                    }
                </span>
            </button>
        </div>
    );
}