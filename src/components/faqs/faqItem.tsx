import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn/cn';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

export function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
    return (
        <div className={`relative p-[25px] ${isOpen ? 'border-[1px] border-brand' : ''} shadow-lg rounded-[14px] `}>
            <button
                onClick={onClick}
                className={`w-full text-left flex items-center justify-between transition-colors `}
            >
                <span className="font-medium text-[#170F49]">
                    {question}
                </span>
                <div className={`${isOpen ? 'bg-brand p-1' : ''} rounded-full `}>
                    <ChevronDown
                        className={cn(
                            'h-[21px] w-[20px] pt-0.5 transition-transform duration-200',
                            isOpen ? 'rotate-270 text-white' : '-rotate-90 text-brand'
                        )}
                    />
                </div>
            </button>
            <div
                className={cn(
                    'overflow-hidden transition-all mt-[10px] duration-500 ease-in-out',
                    isOpen ? 'max-h-48 ' : 'max-h-0'
                )}
            >
                <p className="text-start text-[#6F6C90] font-[400] text-[16px]">
                    {answer}
                </p>
            </div>
        </div>
    );
}