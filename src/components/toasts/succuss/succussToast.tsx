import { useEffect, useState } from "react";

interface ToastProps {
    title: string;
    body: string;
    duration?: number;
    onClose: () => void;
}

export default function SuccessToast({ title, body, duration = 5000, onClose }: ToastProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState<any>(null);

    useEffect(() => {
        setIsVisible(true);
        if (!isHovered) {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                setTimeout(onClose, 300);
            }, duration);
            setTimer(timeout);
        } else if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isHovered, onClose, duration, timer]);

    return (
        <div
            className={`absolute bg-white z-[100000] top-5 end-2 md:end-10 flex items-center p-4 rounded-lg shadow-md w-[90%] sm:w-96 hover:cursor-pointer toast-success-bg overflow-hidden 
                transform transition-transform duration-500 ease-in-out 
                ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-100"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="/icons/greenLines.svg" alt="lines" className="absolute top-0 start-0 h-full" />
            <div className="flex items-center justify-center w-12 h-12 bg-gray-100 z-[10] rounded-full">
                <img src="/icons/check.svg" alt="Check" className="w-6 h-6" />
            </div>
            <div className="ml-4">
                <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{body}</p>
            </div>
            <button
                onClick={() => {
                    setIsVisible(false);
                    setTimeout(onClose, 300);
                }}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
            >
                ✕
            </button>
        </div>
    );
}
