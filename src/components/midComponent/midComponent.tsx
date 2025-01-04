import CreatePost from "../createPost/createPost";
import { StoriesBar } from "../scroller/storiesBar";

export default function MidComponent() {
    return (
        <div className="flex flex-col gap-[24px] w-fit  col-span-3">
            <CreatePost />
            <StoriesBar />
        </div>
    )
}
