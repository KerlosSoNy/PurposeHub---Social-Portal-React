interface CommentInputProps {
    userAvatarUrl: string;
}

export function CommentInput({ userAvatarUrl }: CommentInputProps) {
    return (
        <div className="mt-4 me-[12px] flex items-center gap-3">
            <img
                src={userAvatarUrl}
                alt="User avatar"
                className="w-[40px] h-[40px] rounded-full"
            />
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Write a comment here..."
                    className="w-full py-2 px-4 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className="flex flex-row justify-center items-center gap-2">
                <img src="/posts/emoji.png" className="w-[40px] h-[40px]" alt="emoji" />
                <img src="/posts/pic.png" className="w-[40px] h-[40px]" alt="emoji" />
            </div>
        </div>
    );
}