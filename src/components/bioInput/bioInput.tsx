
export function BioInput({ bio, title, placeHolder, setBio }: {
    bio: string
    title?: string
    placeHolder?: string
    setBio: any
}) {
    const maxLength = 500;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value;
        if (text.length <= maxLength) {
            setBio(text);
        }
    };

    return (
        <div className="space-y-2 ">
            <div className="flex justify-between items-center mb-[8px]">
                <label htmlFor="bio" className="block text-[16px] font-medium text-gray-700">
                    {title ? title : 'Short Bio'}
                </label>
                <span className="text-xs text-gray-500">
                    {bio.length}/{maxLength}
                </span>
            </div>

            <textarea
                id="bio"
                value={bio}
                onChange={handleChange}
                placeholder={placeHolder ? placeHolder : "Write short bio here..."}
                className="w-full shadow-lg min-h-[120px] p-3 border-[1px] border-[#018AAF]/40 rounded-[8px] focus:ring-2 focus:ring-[#018AAF]/40 outline-none focus:border-transparent resize-none transition-all text-gray-800 placeholder:text-gray-400"
            />
        </div>
    );
}