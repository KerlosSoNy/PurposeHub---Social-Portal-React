import { useState, useEffect, useRef } from "react";

export default function LeaderSelectMenu() {
    const [value, setValue] = useState<string>("Math");
    const [open, setOpen] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef} className="text-[18px] relative font-medium">
            <button
                onClick={() => setOpen(!open)}
                className="flex flex-row items-center gap-[12px]"
            >
                {value}
                <img
                    src="/posts/arrow-circle-right.png"
                    alt="Bell"
                    className="w-[24px] h-[24px]"
                />
            </button>
            {open && (
                <div className="absolute top-[calc(100%+8px)] left-0 min-w-[100px] bg-white shadow-lg rounded-[20px] p-[16px] z-[100] text-start">
                    <div className="flex flex-col gap-[12px]">
                        <button
                            className="text-start"
                            onClick={() => {
                                setValue("Math");
                                setOpen(false);
                            }}
                        >
                            Math
                        </button>
                        <button
                            onClick={() => {
                                setValue("Economics");
                                setOpen(false);
                            }}
                        >
                            Economics
                        </button>
                        <button
                            className="text-start"
                            onClick={() => {
                                setValue("Physics");
                                setOpen(false);
                            }}
                        >
                            Physics
                        </button>
                        <button
                            className="text-start"
                            onClick={() => {
                                setValue("Chemistry");
                                setOpen(false);
                            }}
                        >
                            Chemistry
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
