import { useState } from "react";

interface EngagementStatsProps {
    likes: number;
    comments: number;
    sponser?: boolean;
    hide?: boolean
    showAllComments?: boolean
    setShowAllComments?: React.Dispatch<React.SetStateAction<boolean>>
}

export function EngagementStats({ likes, comments, sponser, hide, showAllComments, setShowAllComments }: EngagementStatsProps) {
    const [liked, setLiked] = useState(false)
    return (
        <div className="flex flex-col gap-[13px] mt-[30px] me-[12px] text-gray-500 text-sm border-b-[1px] pb-[31px] border-[#E5E5E5] mb-[16px]">
            <div className="flex flex-row justify-between items-center gap-5">
                <div className='flex flex-row gap-[24px]'>
                    <div className="flex items-center gap-2">
                        <img src='/icons/Like.svg' className={`w-[20px] h-[20px] ${liked && 'active-icon'} hover:cursor-pointer`} alt='comment' onClick={() => setLiked(!liked)} />
                        <span>{liked ? likes + 1 : likes}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <img src='/icons/Repeat.svg' className='w-[25px] h-[20px]' alt='comment' />
                    </div>
                    <div className="flex items-center gap-2">
                        <img src='/icons/comment.svg' className='w-[20px] h-[20px]' alt='comment' />
                        <span>{comments}</span>
                    </div>
                </div>
                <div>
                    {sponser &&
                        <div className="flex items-center gap-[8px] bg-[#fff5f5] rounded-full px-1 md:px-2">
                            <img src='/icons/fire.svg' className='w-[18px] h-[18px] md:w-[24px] md:h-[24px]' alt='comment' />
                            <span className='text-[13px] md:text-[16px] font-semibold text-[#FF7A00]'>
                                Get more likes
                            </span>
                        </div>
                    }
                    {
                        hide &&
                        <div className="flex items-center gap-[8px]">
                            <img src='/icons/Eye-02.svg' className='w-[24px] h-[24px]' alt='comment' />
                            <span className='text-[16px] font-semibold text-[#8C8B8B]'>
                                Hide content
                            </span>
                        </div>
                    }
                </div>
            </div>
            {
                showAllComments &&
                <div className='flex items-center gap-[8px] cursor-pointer' onClick={() => setShowAllComments && setShowAllComments(false)}>
                    <span className='text-[16px] font-regular text-[#018AAF]'>
                        View 12 comments
                    </span>
                </div>
            }
        </div>
    );
}