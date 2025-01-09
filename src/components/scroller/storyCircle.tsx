
interface StoryCircleProps {
    username: string;
    imageUrl: string;
    hasNewStory?: boolean;
}

export function StoryCircle({ username, imageUrl, hasNewStory = false }: StoryCircleProps) {
    return (
        <div className="flex flex-col items-between justify-between space-y-1">
            <div className={`${hasNewStory ? 'p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600 rounded-full' : ''}`}>
                <div className="bg-white p-[2px] rounded-full">
                    <img
                        src={imageUrl}
                        alt={`${username}'s story`}
                        className="w-16 h-16 rounded-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
                    />
                </div>
            </div>
            <span className={`text-xs text-gray-600 truncate w-16 text-center ${hasNewStory ? '' : 'pt-1'}`}>{username}</span>
        </div>
    );
}