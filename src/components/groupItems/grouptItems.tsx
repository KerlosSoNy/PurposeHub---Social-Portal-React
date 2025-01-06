
interface GroupItemProps {
    name: string;
    memberCount: string;
    imageUrl: string;
    onJoin: () => void;
}

export function GroupItem({ name, memberCount, imageUrl, onJoin }: GroupItemProps) {
    return (
        <div className="flex items-center justify-between py-2.5">
            <div className="flex items-center space-x-3">
                <img
                    src={imageUrl}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                    <h3 className="text-[#6D6C6C] font-[16px]">{name}</h3>
                    <p className="text-[#AAAAAA] text-[14px]">{memberCount} Members</p>
                </div>
            </div>
            <button
                onClick={onJoin}
                className=" flex flex-row items-center gap-[10px] py-1.5 px-[24px] text-sm text-[#018AAF] font-medium border border-[#018AAF] !h-[40px] !w-[100px] rounded-[10px] "
            >
                <div className='flex flex-col items-center justify-center text-[#018AAF] text-3xl px-0.5  pb-0.5 h-4 border-[1px] rounded-full border-[#018AAF]'>
                    <span className=' text-[14px]'>
                        +
                    </span>
                </div>
                Join
            </button>
        </div>
    );
}