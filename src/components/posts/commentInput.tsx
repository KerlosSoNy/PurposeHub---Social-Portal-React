import React, { useState } from 'react';

interface CommentInputProps {
    userAvatarUrl: string;
    extraIcons?: React.ReactNode;
    animation?: React.ReactNode;
}

export function CommentInput({ userAvatarUrl, extraIcons, animation }: CommentInputProps) {
    const [showAnimation, setShowAnimation] = useState(false);

    const handleExtraIconClick = () => {
        setShowAnimation(true);
        setTimeout(() => {
            setShowAnimation(false);
        }, 2500);
    };

    return (
        <div className="mt-4 me-[12px] flex items-center gap-3">
            <img
                src={userAvatarUrl}
                alt="User avatar"
                className="w-[40px] h-[40px] rounded-full"
            />
            {
                showAnimation && animation &&
                <span className="absolute -top-12 end-20 z-[10] w-[310px] h-[250px]">
                    {animation}
                </span>
            }
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Write a comment here..."
                    className="w-full py-2 px-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-[15px]">
                {
                    extraIcons &&
                    <button type="button" title="give rewards" onClick={handleExtraIconClick}>
                        {extraIcons}
                    </button>
                }
                <img src="/posts/emoji.png" className="w-[40px] h-[40px] hover:cursor-pointer" alt="emoji" />
                <img src="/posts/pic.png" className="w-[40px] h-[40px] hover:cursor-pointer" alt="emoji" />
            </div>
        </div>
    );
}