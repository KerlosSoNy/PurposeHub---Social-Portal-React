import QuoteComponent from "../qoute/qouteComponent";

interface ProfileInfoProps {
    name: string;
    handle: string;
    bio: string;
    following: number;
    followers: number;
    badge?: boolean;
}

export function ProfileInfo({ name, handle, bio, following, followers, badge }: ProfileInfoProps) {
    return (
        <div className="pt-20 px-4 -mt-[86px] font-inter">
            <div className="flex justify-between items-start">
                <div className="flex flex-row items-center gap-[4.4px]">
                    <h1 className="text-[24px] font-semibold">{name}</h1>
                    {
                        badge && (
                            <img src="/profile/medal.png" alt="Badge" className="w-[24px] h-[24px]" />
                        )
                    }
                    <p className="text-[#000000]/[0.6] text-[14px] font-[400] pt-[4px]">{`(${handle})`}</p>
                </div>
            </div>
            <p className="mt-[2px] text-[#000000]/[0.9] text-[16px]">{bio}</p>
            <QuoteComponent />
            <div className="flex gap-4 font-[400] text-[#018AAF] mt-3 text-[14px]">
                <span className="hover:underline cursor-pointer">
                    <span>{following}</span> Following
                </span>
                <span className="hover:underline cursor-pointer">
                    <span>{followers}</span> Followers
                </span>
            </div>
        </div>
    );
}