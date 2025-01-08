interface ProgressBarProps {
    progress: number;
    text: string;
}

export function ProgressBar({ progress, text }: ProgressBarProps) {
    return (
        <div className="w-full">
            <p className="text-sm text-gray-800 mb-2">{text}</p>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                    className="absolute left-0 h-full bg-[#00A3D7] rounded-full"
                    style={{ width: `${progress}%` }}
                />
                <div
                    className="absolute flex items-center justify-center w-8 h-8 -translate-y-1/2 bg-white border-2 border-[#00A3D7] rounded-full"
                    style={{ left: `${progress}%`, transform: `translate(-50%, -50%)` }}
                >
                    <span className="text-xs font-medium text-[#00A3D7]">{progress}%</span>
                </div>
            </div>
        </div>
    );
}