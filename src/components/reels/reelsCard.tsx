import { CheckCircle2, Maximize, Share2, X } from 'lucide-react';
import { VideoPlayer } from '../video/videoPlayer';

interface ReelCardProps {
    username: string;
    isVerified: boolean;
    thumbnailUrl: string;
    avatarUrl: string;
    videoUrl: string;
}

export default function ReelCard({ username, isVerified, thumbnailUrl, avatarUrl, videoUrl }: ReelCardProps) {
    return (
        <div className="relative rounded-[25.5px] overflow-hidden aspect-[4/5]">
            <VideoPlayer link={videoUrl} />
            <img
                src={thumbnailUrl}
                alt={`${username}'s reel`}
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

            <div className="absolute top-[32px] left-[24px] right-[24px] flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <img
                        src={avatarUrl}
                        alt={username}
                        className="w-[40px] h-[40px] rounded-full border border-white"
                    />
                    <span className="text-white text-[18px] font-semibold">{username}</span>
                    {isVerified && (
                        <img src="/icons/verified.svg" alt="Verified" className="w-[20px] h-[20px]" />
                    )}
                </div>
                <div className="flex gap-[24px]">
                    <button title='Share' className="text-white hover:text-gray-200">
                        <Share2 className="w-[24px] h-[24px]" />
                    </button>
                    <button title='Close' onClick={() => {
                        console.log('Full Width')
                    }} className="text-white hover:text-gray-200">
                        <Maximize className="w-[24px] h-[24px]" />
                    </button>
                    <button title='Close' onClick={() => {
                    }} className="text-white hover:text-gray-200">
                        <X className="w-[24px] h-[24px]" />
                    </button>
                </div>
            </div>
        </div>
    );
}