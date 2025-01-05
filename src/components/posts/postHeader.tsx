import { EllipsisVertical } from 'lucide-react';

interface PostHeaderProps {
    avatarUrl: string;
    username: string;
    timestamp: string;
}

export function PostHeader({ avatarUrl, username, timestamp }: PostHeaderProps) {
    return (
        <div className="flex items-start justify-between">
            <div className="flex gap-3">
                <img
                    src={avatarUrl}
                    alt={`${username}'s profile`}
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <div className='flex flex-row gap-[17px]'>
                        <div className="flex flex-col items-start gap-[1px]">
                            <h2 className="font-bold">{username}</h2>
                            <span className="text-[#AAAAAA] text-[14px]">{timestamp}</span>
                        </div>
                        <span className='text-blue-500 font-medium text-[16px]'>
                            Follow
                        </span>
                    </div>

                </div>
            </div>
            <div className='flex flex-row items-center'>
                <span className="text-[#AAAAAA] text-[16px]">
                    23.15k views
                </span>
                <button title='More' className="text-gray-500 hover:bg-gray-100 p-2 rounded-full">
                    <EllipsisVertical size={30} color='#C4C4C4' />
                </button>
            </div>
        </div>
    );
}