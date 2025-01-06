import { useEffect, useRef, useState } from "react";
import { links } from "../sideMenu/constant";

export default function SmallMenu({ setIsOpen, isOpen }: { setIsOpen: React.Dispatch<React.SetStateAction<boolean>>, isOpen: boolean }) {
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
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);


    const [active, setActive] = useState<number | null>(1)

    return (
        <div className="rounded-[20px] scrollbar-hide  overflow-hidden flex flex-col gap-5 relative pt-[15px]" ref={menuRef}>
            <img src="/icons/logo.png" alt="logo" className="nav-logo-body h-[clamp(38px,2.8rem,45px)] mx-auto" />
            <div className="flex flex-col gap-[30px] rounded-[20px] bg-white px-[30px] py-[26px]">
                {
                    links.map((link) => (
                        <div className='flex flex-row items-center gap-[9px] hover:cursor-pointer' onClick={() => { setActive(link.id); setIsOpen(false) }} key={link.id}>
                            <img src={link.icon} alt={link.name} className={active === link.id ? "active-icon" : ""} />
                            <p className={`text-[16px] font-medium ${active === link.id ? "text-[#018AAF]" : "text-[#8C8B8B]"} `}>{link.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
