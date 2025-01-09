import { useEffect, useRef } from "react";

export default function FriendsMenu({ setFollow, follow, setIsOpen, isOpen, isBlock, setIsBlock, isFriends, setIsFriends }:
    { setFollow: React.Dispatch<React.SetStateAction<boolean>>, follow: boolean, setIsFriends: React.Dispatch<React.SetStateAction<boolean>>, isFriends: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, setIsBlock: React.Dispatch<React.SetStateAction<boolean>>, isBlock: boolean, isOpen: boolean }) {
    const menuRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // @ts-ignore
            if ('friendsButton' === event?.target?.id) {
                return
            } else {
                // @ts-ignore
                if (menuRef.current && !menuRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="rounded-[20px] font-inter scrollbar-hide z-[1000000] overflow-hidden flex flex-col gap-5 relative py-[24px] ps-[4px] pe-[32px]" ref={menuRef}>
            <button type="button" onClick={() => {
                setIsFriends(!isFriends)
                setIsOpen(false)
            }} className="flex flex-row items-start  gap-[8px] px-5">
                <img src="/profile/unfriend.svg" alt="Unfriend" className="w-[24px]" />
                <div className="flex flex-col items-start">
                    <span className="text-[14px] font-[400] text-[#444444]">{isFriends ? 'Unfriend' : 'Friend'}</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">Get notify</span>
                </div>
            </button>
            <button type="button" onClick={() => {
                setFollow(!follow)
            }} className="flex flex-row items-start gap-[8px] px-5">
                <img src="/icons/people.svg" alt="Blcok" className="w-[24px]" />
                <div className="flex flex-col items-start">
                    <span className="text-[14px] font-[400] text-[#444444]">{follow ? 'Unfollow' : 'follow'}</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">Get notify</span>
                </div>
            </button>
            <button type="button" onClick={() => {
                setIsOpen(false)
                setIsBlock(!isBlock)
            }} className="flex flex-row items-start gap-[8px] px-5">
                <img src="/profile/block.svg" alt="Blcok" className="w-[24px]" />
                <div className="flex flex-col items-start">
                    <span className="text-[14px] font-[400] text-[#444444]">{isBlock ? 'Unblock' : 'Block'}</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">Get notify</span>
                </div>
            </button>
            <button onClick={() => setIsOpen(false)} type="button" className="flex flex-row items-start  gap-[8px] px-5">
                <img src="/profile/unfollow.svg" alt="Report" className="w-[24px]" />
                <div className="flex flex-col items-start">
                    <span className="text-[14px] font-[400] text-[#444444]">Report person</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">hide all</span>
                </div>
            </button>
        </div>
    )
}
