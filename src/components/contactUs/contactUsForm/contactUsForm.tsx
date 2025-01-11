import { useState } from 'react';
import { HelpCircle, Wallet, LineChart, CreditCard, Send } from 'lucide-react';
import { cn } from '../../../utils/cn/cn';

interface Category {
    id: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
    color: string;
}

export function ContactForm() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories: Category[] = [
        {
            id: 'getting-started',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 20H2V18H3V11.031C3 6.043 7.03 2 12 2C16.97 2 21 6.043 21 11.031V18H22V20ZM5 18H19V11.031C19 7.148 15.866 4 12 4C8.134 4 5 7.148 5 11.031V18ZM9.5 21H14.5C14.5 21.663 14.2366 22.2989 13.7678 22.7678C13.2989 23.2366 12.663 23.5 12 23.5C11.337 23.5 10.7011 23.2366 10.2322 22.7678C9.76339 22.2989 9.5 21.663 9.5 21Z" fill="#1573FE" />
            </svg>
            ,
            title: 'Getting Started',
            subtitle: 'Questions about',
            color: 'bg-[#dff1ff] text-blue-600 border-blue-100',
        },
        {
            id: 'how-to-invest',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_410_4096)">
                    <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#049C6B" />
                </g>
                <defs>
                    <clipPath id="clip0_410_4096">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: 'How to Invest',
            subtitle: 'Questions about',
            color: 'bg-[#e8ffeb] text-green-600 border-green-100',
        },
        {
            id: 'investment-advice',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_410_4096)">
                    <path d="M12 1L21.5 6.5V17.5L12 23L2.5 17.5V6.5L12 1ZM12 3.311L4.5 7.653V16.347L12 20.689L19.5 16.347V7.653L12 3.311ZM12 16C10.9391 16 9.92172 15.5786 9.17157 14.8284C8.42143 14.0783 8 13.0609 8 12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8C13.0609 8 14.0783 8.42143 14.8284 9.17157C15.5786 9.92172 16 10.9391 16 12C16 13.0609 15.5786 14.0783 14.8284 14.8284C14.0783 15.5786 13.0609 16 12 16ZM12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14Z" fill="#049C6B" />
                </g>
                <defs>
                    <clipPath id="clip0_410_4096">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: 'How to Invest',
            subtitle: 'Questions about',
            color: 'bg-[#e3f2f6] text-teal-600 border-teal-100',
        },
        {
            id: 'payment',
            icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_410_4106)">
                    <path d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM4 5V19H20V5H4ZM8.5 14H14C14.1326 14 14.2598 13.9473 14.3536 13.8536C14.4473 13.7598 14.5 13.6326 14.5 13.5C14.5 13.3674 14.4473 13.2402 14.3536 13.1464C14.2598 13.0527 14.1326 13 14 13H10C9.33696 13 8.70107 12.7366 8.23223 12.2678C7.76339 11.7989 7.5 11.163 7.5 10.5C7.5 9.83696 7.76339 9.20107 8.23223 8.73223C8.70107 8.26339 9.33696 8 10 8H11V6H13V8H15.5V10H10C9.86739 10 9.74021 10.0527 9.64645 10.1464C9.55268 10.2402 9.5 10.3674 9.5 10.5C9.5 10.6326 9.55268 10.7598 9.64645 10.8536C9.74021 10.9473 9.86739 11 10 11H14C14.663 11 15.2989 11.2634 15.7678 11.7322C16.2366 12.2011 16.5 12.837 16.5 13.5C16.5 14.163 16.2366 14.7989 15.7678 15.2678C15.2989 15.7366 14.663 16 14 16H13V18H11V16H8.5V14Z" fill="#DF1525" />
                </g>
                <defs>
                    <clipPath id="clip0_410_4106">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            ,
            title: 'Payment Methods',
            subtitle: 'Questions about',
            color: 'bg-[#ffecef] text-rose-600 border-rose-100',
        },
    ];

    return (
        <div className="w-full rounded-[20px] !font-montserrat">
            <div className="space-y-6">
                <div className='bg-white rounded-[20px] px-[21px] py-[32px]'>
                    <div className='mb-[32px]'>
                        <h2 className="text-[30px] font-bold text-[#170F49] mb-[16px] ">Get in Touch</h2>
                        <p className="text-[14px] font-[400] text-[#575757]">
                            Let's align our constellation! Reach out and let the magic of collaboration illuminate our skies.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={cn(
                                    'pt-[16px] ps-[16px] overflow-hidden pb-[20px] pe-[11px] rounded-xl transition-all duration-500 text-left',
                                    'hover:scale-105 hover:shadow-md',
                                    `${category.color} border-current`
                                )}
                            >
                                <div className={cn(
                                    'rounded-lg w-min p-2',
                                    category.color
                                )}>
                                    {category.icon}
                                </div>
                                <div className="mt-2 space-y-1">
                                    <p className="text-[14px] text-[#616161] font-[400]">{category.subtitle}</p>
                                    <p className="text-[14px] truncate font-semibold text-gray-900 ">{category.title}</p>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Form Fields */}
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Full Name
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Issue Type
                        </label>
                        <select
                            id="issueType"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                            <option value="">Select issue type</option>
                            <option value="general">General Inquiry</option>
                            <option value="technical">Technical Support</option>
                            <option value="billing">Billing Issue</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="priority" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Priority level
                        </label>
                        <select
                            id="priority"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            rows={4}
                            placeholder="Write message here"
                            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center space-x-2 transition-colors"
                    >
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                    </button>
                </form>
            </div>
        </div>
    );
}