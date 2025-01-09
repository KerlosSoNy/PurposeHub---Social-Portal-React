interface CommentHeaderProps {
    author: string;
    time: string;
    badge?: boolean;
}

export default function CommentHeader({ author, time, badge }: CommentHeaderProps) {
    return (
        <div className="flex items-center gap-1.5">
            <h3 className="font-medium text-[14px] text-gray-900">{author}</h3>
            <span className="text-[12px] text-gray-500">{time}</span>
            {
                badge && (
                    <img src='/icons/smallBadge.svg' className='w-[18px] h-[18px]' alt='comment' />
                )
            }
        </div>
    );
}