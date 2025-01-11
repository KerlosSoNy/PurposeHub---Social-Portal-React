import { User } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router";

export default function ProfileMenu({ setIsOpen, isOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }) {
    const menuRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }

        return () => document.body.classList.remove("no-scroll");
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // @ts-ignore
            if ('profileButtonIcon' === event?.target?.id || "ProfileMenuButton" === event?.target?.id || "PersonAvatar" === event?.target?.id || "UserName" === event?.target?.id || 'profileButton' === event?.target?.id) {
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
            <Link to='/profile' className="flex flex-row items-start  gap-[8px] px-5">
                <User color="#8C8B8B" size={24} />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[400] text-[#444444]">View Profile</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">Get notify</span>
                </div>
            </Link>
            <Link to='/settings' className="flex flex-row items-start gap-[8px] px-5">
                <img src="/icons/setting-2.svg" alt="Setting" className="w-[24px]" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[400] text-[#444444]">Settings</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">Get notify</span>
                </div>
            </Link>
            <Link to='/faqs' className="flex flex-row items-start  gap-[8px] px-5">
                <img src="/icons/message.svg" alt="Message" className="w-[24px]" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[400] text-[#444444]">FAQ Questions</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">hide all</span>
                </div>
            </Link>
            <Link to='/contact-support' className="flex flex-row items-start gap-[8px] px-5">
                <img src="/icons/support.svg" alt="Support" className="w-[24px]" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[400] text-[#444444]">Contact Support
                    </span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">hide all</span>
                </div>
            </Link>
            <Link to='/terms' className="flex flex-row items-start  gap-[8px] px-5">
                <img src="/icons/document.svg" alt="Document" className="w-[24px]" />
                <div className="flex flex-col">
                    <span className="text-[14px] font-[400] text-[#444444]">Terms & Conditions</span>
                    <span className="text-[12px] font-[400] text-[#777777] -mt-1">hide all</span>
                </div>
            </Link>
        </div>
    )
}
