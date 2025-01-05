interface CommentInputProps {
    userAvatarUrl: string;
}

export function CommentInput({ userAvatarUrl }: CommentInputProps) {
    return (
        <div className="mt-4 flex items-center gap-3">
            <img
                src={userAvatarUrl}
                alt="User avatar"
                className="w-8 h-8 rounded-full"
            />
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Write a comment here..."
                    className="w-full py-2 px-4 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <button className="text-gray-400 hover:text-gray-600">
                        😊
                    </button>
                </div>
            </div>
        </div>
    );
}