import { EllipsisVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CreatePost() {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            // @ts-ignore
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    return (
        <div className="min-h-[158px] flex flex-col gap-[33px] rounded-[20px] shadow-lg bg-white pb-[32px] pt-[26px] px-[32px]">
            <div className="flex flex-row gap-[15px] items-center">
                <img src="/icons/person.png" alt="Person" className="w-[40px] h-[40px] rounded-full" />
                <input
                    title="Create Post"
                    placeholder="What's on your mind right now?"
                    className="outline-none h-[64px] max-h-[164px] resize-none w-full"
                />
            </div>

            <div className="flex flex-row flex-wrap items-center gap-[12px] justify-between">
                <div className="flex flex-row flex-wrap items-center gap-[16px]">
                    <div className="flex flex-row flex-wrap gap-[10px] sm:gap-[16px] sm:max-w-full overflow-hidden">
                        <button title="Emoji" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/emoji.png" alt="Emoji" className="w-[40px] h-[40px]" />
                        </button>
                        <button title="Upload Picture" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/pic.png" alt="Picture" className="w-[40px] h-[40px]" />
                        </button>
                        <button title="Upload Video" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/video.png" alt="Video" className="w-[40px] h-[40px]" />
                        </button>
                        <button title="Upload Player" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/player.png" alt="Player" className="w-[40px] h-[40px] hidden sm:block" />
                        </button>
                        <button title="Insert Hashtag" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/hash.png" alt="Hashtag" className="w-[40px] h-[40px] hidden sm:block" />
                        </button>
                        <button title="Settings" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/setting.png" alt="Settings" className="w-[40px] h-[40px] hidden sm:block" />
                        </button>
                        <button title="Insert Badge" className="hover:bg-[#F5F6FA] rounded-full duration-300 transition-all">
                            <img src="/posts/badge.png" alt="Badge" className="w-[40px] h-[40px] hidden sm:block" />
                        </button>
                    </div>
                    <div className="relative sm:hidden" ref={menuRef}>
                        <button
                            type="button"
                            title="More"
                            className="w-[40px] h-[40px] -ms-10 flex items-center justify-center border-[1.5px] rounded-full"
                            onClick={() => setShowMenu(!showMenu)}
                        >
                            <EllipsisVertical size={20} color='#C4C4C4' />

                        </button>
                        {showMenu && (
                            <div className="absolute top-full -start-12 mt-2  w-[60px] bg-white shadow-lg rounded-lg z-[50]">
                                <ul className="flex flex-col items-center gap-2 p-2">
                                    <li><img src="/posts/player.png" alt="Player" className="w-[40px] h-[40px]" /></li>
                                    <li><img src="/posts/hash.png" alt="Hashtag" className="w-[40px] h-[40px]" /></li>
                                    <li><img src="/posts/setting.png" alt="Settings" className="w-[40px] h-[40px]" /></li>
                                    <li><img src="/posts/badge.png" alt="Badge" className="w-[40px] h-[40px]" /></li>
                                </ul>
                            </div>
                        )}
                    </div>

                </div>

                {/* Post Button */}
                <button className="flex flex-row gap-[8px] text-white rounded-full w-[91px] h-[40px] bg-[#018AAF] font-bold text-[16px] items-center justify-center">
                    <span className="pb-[2px]">Post</span>
                    <img src="/posts/arrow.svg" alt="Arrow" className="w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    );
}
