
export default function Content({ content, hashtags }: { content: string, hashtags: string[] }) {
    return (
        <p className="text-[16px] mb-[30px] mt-[9px]">
            {content}
            <br />
            <span className="text-[#018AAF]">{hashtags.join(' ')}</span>
        </p>
    )
}