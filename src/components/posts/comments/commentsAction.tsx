
interface CommentActionsProps {
    isLiked: boolean;
    likes: number;
}

export default function CommentActions({ isLiked, likes }: CommentActionsProps) {
    return (
        <div className="flex items-center justify-between gap-3 mt-[12px]">
            <div className="flex flex-row gap-[16px]">
                <button
                    className={`text-[14px] ${isLiked ? 'text-blue-600 ' : 'text-gray-500'
                        }`}
                >
                    {isLiked ? 'Liked' : 'Like'}
                </button>

                <button className="text-[13px] text-gray-500">
                    Reply
                </button>
            </div>
            {likes > 0 && (
                <>
                    <span className="text-[13px] text-gray-500">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
                </>
            )}
        </div>
    );
}