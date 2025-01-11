import { useState } from 'react';

export function EmailSubscription() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Subscribed:', email);
        setEmail('');
    };

    return (
        <div className="mb-[40px] flex flex-col">
            <form onSubmit={handleSubmit} className="flex gap-2 px-[15px] py-[11px] shadow-lg rounded-full">
                <div className="flex-1">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2  text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="px-6 py-2 text-[18px] bg-brand rounded-full text-white font-bold transition-colors flex items-center gap-2"
                >
                    Subscribe
                </button>
            </form>
            <p className="flex flex-row mx-auto text-[16px] font-[400] mt-[24px] gap-[2px] text-[#6F6C90]">
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.1689 22.8438C17.2442 22.8438 22.1689 17.9191 22.1689 11.8438C22.1689 5.76845 17.2442 0.84375 11.1689 0.84375C5.09365 0.84375 0.168945 5.76845 0.168945 11.8438C0.168945 17.9191 5.09365 22.8438 11.1689 22.8438Z" fill="#018AAF" />
                    <path d="M5.66895 12.3922L8.96895 15.6922L16.6689 7.99219" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p>We <span className='text-brand'>100% free</span> and we will never send more than one email per month</p>
            </p>
        </div>
    );
}