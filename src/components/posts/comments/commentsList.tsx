import CommentCard from './commentsCards';

interface CommentListProps {
    comments: Comment[];
}
interface Comment {
    id: number;
    author: string;
    time: string;
    content: string;
    likes: number;
    isLiked: boolean;
    avatarUrl: string;
    replies?: Comment[];
}

export default function CommentList({ comments }: CommentListProps) {
    return (
        <div className="max-w-3xl me-[12px] border-b-[1px] pb-[22px] border-gray-200">
            <h2 className="text-[15px] font-medium text-gray-900 mb-4">
                All Comments  {comments.length}
            </h2>
            <div className="space-y-1">
                {comments.map((comment) => (
                    <CommentCard key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
}