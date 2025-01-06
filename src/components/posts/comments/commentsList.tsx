import CommentCard from './commentsCards';

interface CommentListProps {
    comments: Comment[];
    showAllComments: boolean;
    setShowAllComments: React.Dispatch<React.SetStateAction<boolean>>;
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
    badge?: boolean;
}

export default function CommentList({ comments, showAllComments, setShowAllComments }: CommentListProps) {
    return (
        <div className="max-w-3xl me-[12px] border-b-[1px] pb-[22px] border-gray-200">
            <div className='flex flex-row items-center gap-[8px]'>
                <h2 className="text-gray-900">
                    All Comments . {comments.length}
                </h2>
                <button type='button' onClick={() => setShowAllComments(!showAllComments)} className='text-[#AAAAAA]'>hide</button>
            </div>
            <div className="space-y-1">
                {comments.map((comment) => (
                    <CommentCard key={comment.id} {...comment} />
                ))}
            </div>
        </div>
    );
}