import { useState } from "react";
import SmallMenu from "./smallMenu";
import { Menu } from "lucide-react";
import ProfileMenu from "./profileMenu";
import { Link } from "react-router";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    return (
        <div className="flex flex-row fixed z-[1000] items-center w-screen nav-body bg-white justify-between">
            <div className="flex flex-row items-center gap-[32px]">
                <Menu
                    className="hover:cursor-pointer block xl:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                />
                <div
                    className={`absolute h-[100vh] left-0 top-0 w-52 xl:hidden bg-white shadow-lg rounded-lg z-50
                            transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                >
                    <SmallMenu setIsOpen={setIsOpen} isOpen={isOpen} />
                </div>
                <Link to='/home'>
                    <img src="/icons/logo.png" alt="logo" className="nav-logo-body h-[clamp(38px,2.8rem,45px]" />
                </Link>
                <div className="md:flex hidden flex-row items-center gap-[8px] py-[9px] px-[16.55px] bg-[#F5F6FA] rounded-[19px] nav-search-body overflow-hidden h-[38px] border-[1px] border-[#D5D5D5]">
                    <img src="/icons/search.png" alt="" className="w-[20px]" />
                    <input type="text" title="Search" placeholder="Search" className="bg-[#F5F6FA] outline-none w-[calc(100%-20px)]" />
                </div>
            </div>
            <div className="flex flex-row gap-[35px] items-center">
                <div className="flex flex-row items-center gap-[24px]">
                    <button title="Notifications" type="button" className="relative flex">
                        <div className="absolute top-[-2.5px] right-[-2px] text-[12px] bg-[#008AAB] text-white rounded-full pb-[2px]
                        px-1.5 text-center align-middle">6</div>
                        <img src="/icons/Bell.png" alt="Bell" className="w-[32px] h-[32px]" />
                    </button>
                    <button title="Messages" type="button" className="relative flex">
                        <div className="absolute top-[-2.5px] right-[-6px] text-[12px] bg-[#008AAB] text-white rounded-full pb-[2px]
                        px-1.5 text-center align-middle">3</div>
                        <img src="/icons/messages.png" alt="Bell" className="w-[clamp(25px,2.5rem,32px] h-[32px]" />
                    </button>
                </div>
                <div id="ProfileMenuButton" onClick={() => setOpenProfile(!openProfile)} className="flex flex-row relative profileButton items-center gap-[clamp(10px,1rem,12px)] hover:cursor-pointer">
                    <img id="PersonAvatar" src="/icons/person.png" alt="Bell" className="nav-profile-body rounded-full" />
                    <span id="UserName" className="font-bold profileButton hidden md:block  nav-profile-name">Omar Ashraf</span>
                    <div className=" pt-1 hover:cursor-pointer">
                        <button id="profileButton" title="Dropdown" type="button" className={`rounded-full w-[24px] h-[24px] pt-[1px] ps-[7px] !border-[0.2px] ${openProfile ? 'border-[#008AAB] active-icon' : 'border-[#5C5C5C]'}`}>
                            <img id="profileButtonIcon" src="/icons/down.png" alt="Bell" className="w-[8px] z-[1000] h-[5.3px]" />
                        </button>
                        <div
                            className={`absolute right-0 top-[62px] min-w-[259px] p-0 bg-white shadow-lg rounded-[10px] 
                            transition-all duration-300 ease-in-out ${openProfile ? '-translate-x-0' : 'translate-x-[1000px]'
                                }`}
                        >
                            <ProfileMenu setIsOpen={setOpenProfile} isOpen={openProfile} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
