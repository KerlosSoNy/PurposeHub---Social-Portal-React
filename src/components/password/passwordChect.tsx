import { Check, X } from 'lucide-react';

interface Requirement {
    message: string;
    valid: boolean;
}

interface PasswordRequirementsProps {
    requirements: Requirement[];
}

export function PasswordRequirements({ requirements }: PasswordRequirementsProps) {
    return (
        <div className="space-y-2">
            {requirements.map((requirement, index) => (
                <div
                    key={index}
                    className={`flex items-center space-x-2 ${requirement.valid ? 'text-green-600' : 'text-gray-600'
                        }`}
                >
                    {requirement.valid ? (
                        <Check size={16} className="text-green-500" />
                    ) : (
                        <X size={16} className="text-gray-400" />
                    )}
                    <span className="text-sm">{requirement.message}</span>
                </div>
            ))}
        </div>
    );
}