import CreatePost from "../../createPost/createPost";
import { Post } from "../../posts/post";

export default function ProfilePosts() {
    return (
        <div className="w-[90vw] flex flex-col gap-[24px] md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl">
            <CreatePost />
            <Post
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                username="Ahmed Sayed"
                timestamp="16h"
                content="This 3 shows are special🤝  Part (1/7)"
                hashtags={['#TheOwlHouse', '#DemonSlayer', '#AvatarTheLastAirbender']}
                imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop"
                likes={123}
                comments={12}
                userAvatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            />
            <Post
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                username="Ahmed Sayed"
                timestamp="16h"
                content="This 3 shows are special🤝  Part (1/7)"
                hashtags={['#TheOwlHouse', '#DemonSlayer', '#AvatarTheLastAirbender']}
                imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop"
                likes={123}
                comments={12}
                userAvatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            />
            <Post
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                username="Ahmed Sayed"
                timestamp="16h"
                content="This 3 shows are special🤝  Part (1/7)"
                hashtags={['#TheOwlHouse', '#DemonSlayer', '#AvatarTheLastAirbender']}
                imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop"
                likes={123}
                comments={12}
                userAvatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            />
            <Post
                avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
                username="Ahmed Sayed"
                timestamp="16h"
                content="This 3 shows are special🤝  Part (1/7)"
                hashtags={['#TheOwlHouse', '#DemonSlayer', '#AvatarTheLastAirbender']}
                imageUrl="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop"
                likes={123}
                comments={12}
                userAvatarUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            />
        </div>
    )
}
