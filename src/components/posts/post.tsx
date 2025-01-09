import { useState } from "react";
import { CommentInput } from "./commentInput";
import Content from "./content";
import { EngagementStats } from "./likeAndShare";
import { PostHeader } from "./postHeader";
import { PostImage } from "./postImage";
import CommentList from "./comments/commentsList";
import { mockComments } from "./comments/constant";
import { typesOfPosts } from "./constant";

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
    type?: string
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
    type
}: PostProps) {
    const [showAllComments, setShowAllComments] = useState(true);
    return (
        // @ts-ignore
        <div className={`${typesOfPosts[`${type}`] ? typesOfPosts[`${type}`].bgColor : 'bg-white'} overflow-hidden shadow-sm relative rounded-[20px] ps-[34px] pe-[35px] py-[24px]  w-full`}>
            {
                // @ts-ignore 
                type && <img src={typesOfPosts[`${type}`] ? typesOfPosts[`${type}`].bgImage : ""} alt="line" className="w-full absolute z-[1]" />
            }
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
            {/* @ts-ignore */}
            <CommentInput animation={typesOfPosts[`${type}`] ? typesOfPosts[`${type}`].animation : ""} extraIcons={typesOfPosts[`${type}`] ? typesOfPosts[`${type}`].icon : null} userAvatarUrl={userAvatarUrl} />
        </div>
    );
}