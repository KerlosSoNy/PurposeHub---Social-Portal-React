interface ProgressBarProps {
    progress: number;
    text: string | React.ReactNode;
}

export function ProgressBar({ progress, text }: ProgressBarProps) {
    return (
        <div className="w-full bg-white rounded-[16px] pt-[17px] ps-[24px] pe-[16px] pb-[37px]">
            <p className="text-[17px] font-medium text-[#201926] mb-[34px]">{text}</p>
            <div className="relative w-full h-[16px] bg-gray-200 rounded-full">
                <div
                    className="absolute  left-0 h-full bg-[#00A3D7] rounded-full"
                    style={{ width: `${progress === 0 ? 2 : progress}%` }}
                />
                <div
                    className="absolute flex items-center justify-center w-[56px] h-[56px] translate-y-2/3 bg-white border-[4px] border-[#00A3D7] rounded-full"
                    style={{ left: `${progress === 0 ? 3 : progress}%`, transform: `translate(-50%, -40%)` }}
                >
                    <span className="text-xs text-[15px] text-[#201926] font-[400]">{progress}%</span>
                </div>
            </div>
        </div>
    );
}