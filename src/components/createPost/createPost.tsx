
export default function CreatePost() {
    return (
        <div className="min-h-[158px] flex flex-col gap-[33px] rounded-[20px] shadow-lg bg-white pb-[32px] pt-[26px] px-[32px]">
            <div className="flex flex-row gap-[15px] items-center">
                <img src="/icons/person.png" alt="Person" className="w-[40px] h-[40px] rounded-full" />
                <input title="Create Post" placeholder="Whats on your mind right now?" className=" outline-none  h-[64px] max-h-[164px] resize-none w-full" />
            </div>
            <div className="flex flex-row flex-wrap items-center gap-[12px] justify-between">
                <div className="flex flex-row flex-wrap items-center gap-[16px]">
                    <img src="/posts/emoji.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/pic.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/video.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/player.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/hash.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/setting.png" alt="Emoji" className="w-[40px] h-[40px]" />
                    <img src="/posts/badge.png" alt="Emoji" className="w-[40px] h-[40px]" />
                </div>
                <button className="flex flex-row gap-[8px] text-white rounded-full w-[91px] h-[40px] bg-[#018AAF] font-bold text-[16px] items-center justify-center">
                    <span className="pb-[2px]">Post</span>
                    <img src="/posts/arrow.svg" alt="Arrow" className="w-[20px] h-[20px]" />
                </button>
            </div>
        </div>
    )
}
