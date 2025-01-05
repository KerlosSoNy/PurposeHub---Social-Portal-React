import React from 'react';

interface CommentHeaderProps {
    author: string;
    time: string;
}

export default function CommentHeader({ author, time }: CommentHeaderProps) {
    return (
        <div className="flex items-center gap-1.5">
            <h3 className="font-medium text-[14px] text-gray-900">{author}</h3>
            <span className="text-[12px] text-gray-500">{time}</span>
        </div>
    );
}