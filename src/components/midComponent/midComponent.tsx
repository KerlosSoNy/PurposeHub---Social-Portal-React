import CreatePost from "../createPost/createPost";
import { Post } from "../posts/post";
import { ReelsBar } from "../reels/reelsComponents";
import { StoriesBar } from "../scroller/storiesBar";

export default function MidComponent() {
    return (
        <div className="flex flex-col w-[98%] md:w-[70%] xl:w-[55%] gap-[24px]">
            <CreatePost />
            <StoriesBar />
            <Post
                type="event"
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
            <ReelsBar />
            <Post
                type="achievement"
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
                type="idea"
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
                type="export"
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
