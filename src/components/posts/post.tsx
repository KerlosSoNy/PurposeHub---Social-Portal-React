import { useState } from "react";
import { CommentInput } from "./commentInput";
import Content from "./content";
import { EngagementStats } from "./likeAndShare";
import { PostHeader } from "./postHeader";
import { PostImage } from "./postImage";
import CommentList from "./comments/commentsList";
import { mockComments } from "./comments/constant";

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
    const [showAllComments, setShowAllComments] = useState(true);
    return (
        <div className="bg-white rounded-[20px] ps-[34px] pe-[35px] py-[24px]  w-full">
            <PostHeader
                avatarUrl={avatarUrl}
                username={username}
                timestamp={timestamp}
            />
            <Content content={content}
                hashtags={hashtags} />
            <PostImage imageUrl={imageUrl} alt={`${username}'s post`} />
            <EngagementStats likes={likes} comments={comments} sponser setShowAllComments={setShowAllComments} showAllComments={showAllComments} />
            {
                !showAllComments &&
                <CommentList showAllComments={showAllComments} setShowAllComments={setShowAllComments} comments={mockComments} />
            }
            <CommentInput userAvatarUrl={userAvatarUrl} />
        </div>
    );
}