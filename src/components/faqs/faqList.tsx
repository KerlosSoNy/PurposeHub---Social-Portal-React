import { useState } from 'react';
import { FaqItem } from './faqItem';

interface FaqItem {
    question: string;
    answer: string;
}

interface FaqListProps {
    faqs: FaqItem[];
}

export function FaqList({ faqs }: FaqListProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="flex flex-col px-[5px] gap-4">
            {faqs.map((faq, index) => (
                <FaqItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>
    );
}