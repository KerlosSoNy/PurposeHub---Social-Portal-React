import { Heart, MessageCircle, Repeat2, Share } from 'lucide-react';

interface EngagementStatsProps {
    likes: number;
    comments: number;
}

export function EngagementStats({ likes, comments }: EngagementStatsProps) {
    return (
        <div className="flex items-center gap-5 mt-3 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
                <Heart size={18} />
                <span>{likes}</span>
            </div>
            <div className="flex items-center gap-2">
                <MessageCircle size={18} />
                <span>{comments} comments</span>
            </div>
            <div className="flex items-center gap-2">
                <Repeat2 size={18} />
            </div>
            <div className="flex items-center gap-2">
                <Share size={18} />
            </div>
        </div>
    );
}