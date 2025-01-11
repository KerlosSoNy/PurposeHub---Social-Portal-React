import Layout from "../../components/layout/layout";
import { cn } from "../../utils/cn/cn";

interface TermsOfServiceProps {
    lastUpdated?: string;
    className?: string;
}

interface PolicySection {
    title: string;
    content: string;
}

export default function Terms({ lastUpdated = '5/12/2022', className }: TermsOfServiceProps) {

    const sections: PolicySection[] = [
        {
            title: 'Eligibility',
            content: 'You must be at least 18 years of age (or the legal age in your jurisdiction) to use this service. By using the service, you represent that you meet this requirement.',
        },
        {
            title: 'Account Responsibilities',
            content: 'You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account.',
        },
    ];
    return (
        <Layout>
            <div className={cn('w-full flex font-montserrat flex-col gap-[24px] mx-auto rounded-xl overflow-hidden ', className)}>
                {/* Header with image and gradient overlay */}
                <div className="relative h-48 rounded-[20px]">
                    <img
                        src="https://plus.unsplash.com/premium_photo-1730802983621-a3820567da0c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Decorative header"
                        className="w-full  rounded-[20px] h-full object-cover"
                    />

                </div>
                <div className=" rounded-[20px] px-[20px] pt-[33px] pb-[51px] bg-white flex flex-col">
                    <div className="border-b-[1px] pb-[24px]">
                        <span className="text-[16px] font-[400] text-[#9F9F9F] mb-[6px]">AGREEMENT</span>
                        <h1 className="text-[30px] font-bold text-[#170F49] mb-[3px]">Terms of Service</h1>
                        <span className="text-[16px] font-semibold text-[#7C7C7C]">Last updated on {lastUpdated}</span>
                    </div>
                    {sections.map((section) => (
                        <div
                            key={section.title}
                            className={cn(
                                "mt-[24px]"
                            )}
                        >
                            <h2 className="text-[20px] mb-[16px] font-semibold text-[#170F49]">
                                {section.title}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                {section.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
