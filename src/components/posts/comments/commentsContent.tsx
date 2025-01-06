
interface CommentContentProps {
    content: string;
}

export default function CommentContent({ content }: CommentContentProps) {
    return (
        <p className="text-[13.5px] text-gray-900 mt-[8px] w-[98%] lg:w-[80%]">{content}</p>
    );
}