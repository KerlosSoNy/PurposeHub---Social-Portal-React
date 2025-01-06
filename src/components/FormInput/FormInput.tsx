import { useEffect, useState } from "react";

type InputAndLabelProps = {
    label?: string;
    error?: string;
    imgSrc?: string;
    placeholder?: string;
    icon?: JSX.Element;
    see?: boolean;
    isChecked?: boolean;
    isRequired?: boolean;
    type?: React.ComponentProps<"input">["type"];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
} & React.ComponentProps<"input">;

export default function InputAndLabel({
    label,
    error,
    placeholder,
    isRequired,
    imgSrc,
    icon,
    see = false,
    type,
    isChecked,
    onChange,
    ...props
}: InputAndLabelProps) {
    const [visible, setVisible] = useState(true);
    const [typeInput, setTypeInput] =
        useState<React.ComponentProps<"input">["type"]>("");

    const handleVisible = () => {
        setTypeInput(typeInput === "password" ? "text" : "password");
        setVisible(!visible);
    };


    useEffect(() => {
        setTypeInput(type);
    }, [type]);

    return (
        <div
            className={`flex flex-col gap-[clamp(1px,1.5vw,5px)] my-2 relative font-sans text-gray-01 dark:text-white w-full `}
        >
            <div className="flex flex-row ">
                {label && (<label
                    id={label}
                    htmlFor={label}
                    className={`mb-[6px] text-gray-01 !font-medium text-[clamp(16px,1.5vw,18px)] flex flex-row items-center dark:text-shadow_blue `}
                >
                    {label && <span className="ms-[10px]">{label}</span>}
                    <div className="">:</div>
                    {isRequired && <span className="text-errorState block ms-1">*</span>}
                </label>)}

            </div>
            <div className={`relative h-[50px] z-[10] rounded-[12px] bg-white overflow-hidden w-[100%] flex flex-row border-[1px] ${error ? "border-errorState" : "border-[#C8C8C8]"} `}>
                <input
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput}
                    min={type === "number" ? 1 : undefined}
                    onChange={onChange}
                    className={`${icon ? "ps-14" : ""
                        } text-[#333] bg-white outline-none  mb-1 focus:outline-none
                            h-12 p-3 rounded-lg w-[85%] px-6 py-3 text-base font-normal bg-inherit `}
                />
                {see && (
                    <button
                        type="button"
                        onClick={handleVisible}
                        className={`border-s-[1px] border-[#C8C8C8] bg-white flex flex-col items-center justify-center w-[15%]`}
                    >
                        {visible ? (
                            <img src="/icons/closedEye.svg" alt="eye" className="w-[20px] h-[20px]" />
                        ) : (
                            <img src="/icons/closedEye.svg" alt="eye" className="w-[20px] h-[20px]" />
                        )}
                    </button>
                )}
                {error && !see && (
                    <span
                        className={`flex flex-col items-center justify-center z-[10] w-[15%] !bg-white`}

                    >
                        <img alt="error"
                            className="w-6 h-6"
                            src="/icons/error.svg" />
                    </span>
                )}
                {isChecked && (
                    <span
                        className={`flex flex-col items-center justify-center z-[10] w-[15%] !bg-white`}

                    >
                        <img alt="error"
                            className="w-6 h-6"
                            src="/icons/check.svg" />
                    </span>
                )}
            </div>
            {error && <span className="ps-3 text-[14px]  font-semibold text-errorState">{error}</span>}
        </div>
    );
}