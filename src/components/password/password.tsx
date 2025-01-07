import { Check, X } from "lucide-react";

interface PasswordStrengthProps {
    strength: string;
    getStrengthColor: (strength: string) => string;
}

export function PasswordStrength({ strength, getStrengthColor }: PasswordStrengthProps) {
    console.log(getStrengthColor(strength))
    return (
        <div className="flex flex-row gap-2 mt-[24px] 2xl:mt-[32px]">
            {getStrengthColor(strength) === "strong" ? (
                <Check size={16} className="text-green-500 mt-1" />
            ) : (
                <X size={16} className={`${getStrengthColor(strength) === "strong" ? "text-green-600" : getStrengthColor(strength) === "medium" ? "text-orange-600" : "text-gray-400"} mt-0.5`} />
            )}
            <div className="flex items-center justify-between mb-2">
                <span className={`text-sm  ${getStrengthColor(strength) === "strong" ? "text-green-600" : getStrengthColor(strength) === "medium" ? "text-orange-600" : "text-gray-600"}`}>Password Strength : </span>
                {strength !== "Empty" &&
                    <span className={`${getStrengthColor(strength) === "strong" ? "text-green-600" : getStrengthColor(strength) === "medium" ? "text-orange-600" : "text-gray-600"} text-sm ms-1`}> {strength}</span>
                }
            </div>
        </div>
    );
}