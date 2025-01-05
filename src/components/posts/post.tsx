import { CommentInput } from "./commentInput";
import Content from "./content";
import { EngagementStats } from "./likeAndShare";
import { PostHeader } from "./postHeader";
import { PostImage } from "./postImage";

interface PostProps {
    avatarUrl: string;
    username: string;
    timestamp: string;
    content: string;
    hashtags: string[];
    imageUrl: string;
    likes: number;
    comments: number;
    userAvatarUrl: string;
}

export function Post({
    avatarUrl,
    username,
    timestamp,
    content,
    hashtags,
    imageUrl,
    likes,
    comments,
    userAvatarUrl,
}: PostProps) {
    return (
        <div className="bg-white rounded-[20px] px-[34px] py-[24px]  w-full">
            <PostHeader
                avatarUrl={avatarUrl}
                username={username}
                timestamp={timestamp}
            />
            <Content content={content}
                hashtags={hashtags} />
            <PostImage imageUrl={imageUrl} alt={`${username}'s post`} />
            <EngagementStats likes={likes} comments={comments} />
            <CommentInput userAvatarUrl={userAvatarUrl} />
        </div>
    );
}