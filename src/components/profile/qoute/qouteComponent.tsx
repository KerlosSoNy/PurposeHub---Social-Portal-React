
const QuoteComponent = () => {
    return (
        <div className="flex flex-wrap items-center bg-white gap-[12px] mt-[17px] mb-[15px]">
            <div className="flex flex-row gap-[10px] items-center rounded-[8px] p-[10px] bg-[#018AAF]/[0.03]">
                <img src="/profile/planes.svg" className="w-[16px] h-[16px]" alt="plane" />
                <div className="flex-grow text-[#018AAF] font-medium">
                    Small steps, big dreams
                </div>
            </div>

            {/* Hearts */}
            <div className="flex items-center gap-[8px]">
                <img src="/profile/heart.svg" className="w-[24px] h-[24px]" alt="plane" />
                <span className="text-[#EF3739] font-[400] text-[12px] pt-[2px]">14 Hearts</span>
            </div>
        </div>
    );
};

export default QuoteComponent;
