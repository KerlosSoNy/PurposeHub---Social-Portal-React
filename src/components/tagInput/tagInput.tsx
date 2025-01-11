import { TagsInput } from "react-tag-input-component";
import './TagsInputStyles.css';

interface CustomTagInputProps {
    onChange: (tags: string[]) => void;
    title?: string;
    defaultData?: string[];
}

export default function CustomTagInput({ onChange, title, defaultData }: CustomTagInputProps) {
    let selected = defaultData;
    return (
        <div className="flex flex-col gap-[8px] w-full">
            {title && <span>{title}</span>}
            <TagsInput value={selected} onChange={onChange} classNames={{ input: "w-full h-[32px] rounded-[8px]", tag: "text-[14px] text-[#000000] bg-[#F3F3F5] rounded-full p-[8.5px]" }} />
        </div>
    );
};
