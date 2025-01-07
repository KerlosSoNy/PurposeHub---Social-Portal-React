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
            className={`flex flex-col font-inter gap-[clamp(1px,1.5vw,5px)] my-2 relative text-black w-full `}
        >
            <div className="flex flex-row ">
                {label && (<label
                    id={label}
                    htmlFor={label}
                    className={`mb-[8px] text-gray-01 !font-medium text-[clamp(16px,1.5vw,18px)] flex flex-row items-center dark:text-shadow_blue `}
                >
                    {label && <span className="ms-[1px] text-[16px] font-[400]">{label}</span>}
                    {isRequired && <span className="text-errorState block ms-1">*</span>}
                </label>)}

            </div>
            <div className={`relative h-[48px] rounded-[8px] bg-white overflow-hidden w-[100%] flex flex-row shadow-lg border-[1px] ${error ? "border-[#E11A0B]" : "border-[#018AAF]"} `}>
                <input
                    placeholder={placeholder}
                    id={label}
                    {...props}
                    type={typeInput}
                    min={type === "number" ? 1 : undefined}
                    onChange={onChange}
                    className={`${icon ? "ps-14" : ""
                        } text-[#9C9AA5] bg-white outline-none  mb-1 focus:outline-none
                            h-12 p-3 rounded-lg ${isChecked || error || see ? "w-[85%]" : "w-[100%]"} px-[16px] py-3 placeholder:text-[#9C9AA5] pb-4 text-base font-normal bg-inherit `}
                />
                {see && (
                    <button
                        type="button"
                        onClick={handleVisible}
                        className={`bg-white flex flex-col items-center justify-center w-[15%]`}
                    >
                        {visible ? (
                            <img src="/icons/password-eye.svg" alt="eye" className="w-[24px] h-[24px]" />
                        ) : (
                            <img src="/icons/password-eye.svg" alt="eye" className="w-[24px] h-[24px]" />
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
            {error && <span className="ps-3 text-[14px]  font-semibold text-[#E11A0B]">{error}</span>}
        </div>
    );
}