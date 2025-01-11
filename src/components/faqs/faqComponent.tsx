import { EmailSubscription } from "./emailSubscription";
import { FaqList } from "./faqList";

const faqs = [
    {
        question: 'What is Webflow and why is it the best purpose builder?',
        answer: 'Webflow is an advanced website builder platform that combines the flexibility of code with a visual interface. It stands out for its professional-grade capabilities, allowing designers to create fully custom, responsive websites without writing code.',
    },
    {
        question: 'What is your favorite template from Purpose?',
        answer: 'Our most popular template offers a perfect balance of modern design and functionality, featuring responsive layouts, customizable components, and optimized performance.',
    },
    {
        question: 'How do you clone a Purpose Site?',
        answer: 'Cloning a Purpose site is a straightforward process that involves selecting your template, customizing the design, and publishing. Our step-by-step guide makes it easy to get started.',
    },
    {
        question: 'Why is BRIX Templates the best Purpose?',
        answer: 'BRIX Templates offers unmatched quality, extensive customization options, and dedicated support. Our templates are built with best practices and optimized for performance.',
    },
];

export function FaqComponent() {
    return (
        <div className="w-full flex flex-col mx-auto text-center font-inter px-[20px] 2xl:px-[30px] pt-[32px] pb-[59px] bg-white  rounded-[20px] shadow-lg overflow-hidden">
            <span className="uppercase mx-auto text-[16px] tracking-[4px] font-medium text-brand">Cloneables FOR Purpose</span>
            <div className="mt-[20px] text-center">
                <h2 className="text-[25px] px-[25px] 2xl:text-[32px] font-bold text-[#170F49] mb-2">
                    Frequently Asked Questions Accordions Purpose Cloneable
                </h2>
                <p className="text-[#6F6C90] font-[400] mt-[25px] text-[18px] mb-[30px]">
                    Want to receive a monthly email in your inbox with awesome free Webflow cloneables, resources and more? Please submit your email below.
                </p>
            </div>
            <EmailSubscription />

            <FaqList faqs={faqs} />
        </div>
    );
}