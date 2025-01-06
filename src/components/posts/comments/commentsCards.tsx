import CommentHeader from './commentsHeader';
import CommentContent from './commentsContent';
import CommentActions from './commentsAction';

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
export default function CommentCard({ author, time, content, likes, isLiked, avatarUrl, replies }: Comment) {
    return (
        <div>
            <div className="flex gap-2 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <img
                    src={avatarUrl}
                    alt={`${author}'s avatar`}
                    className="w-[40px] h-[40px] rounded-full z-[1000] object-cover"
                />
                <div className="flex-1 min-w-0">
                    <CommentHeader author={author} time={time} />
                    <CommentContent content={content} />
                    <CommentActions isLiked={isLiked} likes={likes} />
                </div>
            </div>
            {replies && replies.length > 0 && (
                <div className="pl-10">
                    {replies.map((reply) => (
                        <div className='relative'>
                            <CommentCard key={reply.id} {...reply} />
                            <div className='h-[1px] -start-2 top-[35px] bg-[#0000001e] absolute w-[20px]' />
                            <div className='w-[1px] -start-2 
                            -top-[19.5vh] sm:-top-[13.6vh] md:-top-[9.8vh] lg:-top-[74px] bg-[#0000001e] absolute 
                            h-[23.4vh] sm:h-[20vh] md:h-[13vh] lg:h-[109px]' />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}