import { EllipsisVertical, EyeOff } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

interface PostHeaderProps {
    avatarUrl: string;
    username: string;
    timestamp: string;
}

export function PostHeader({ avatarUrl, username, timestamp }: PostHeaderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [menuRef]);

    return (
        <div className="flex items-start justify-between relative z-[10]">
            <div className="flex gap-3">
                <img
                    src={avatarUrl}
                    alt={`${username}'s profile`}
                    className="w-12 h-12 rounded-full"
                />
                <div>
                    <div className='flex flex-col sm:flex-row gap-[5px] sm:gap-[17px]'>
                        <div className="flex flex-col items-start gap-[1px]">
                            <Link to={`/profile/${username}`} className="font-bold">{username}</Link>
                            <span className="text-[#AAAAAA] text-[14px]">{timestamp}</span>
                        </div>
                        <span className='text-blue-500 font-medium text-[16px]'>
                            Follow
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-[10px] items-center relative' ref={menuRef}>
                <span className="text-[#AAAAAA] text-[16px]">
                    23.15k views
                </span>
                <button title='More' onClick={() => setIsOpen(!isOpen)} className="text-gray-500  rounded-full">
                    <EllipsisVertical size={30} color='#C4C4C4' />
                </button>
                {
                    isOpen && (
                        <div className="absolute  w-[256px] right-3 top-16 bg-white rounded-md">
                            <ul className="ps-[24px] pe-[40px] pt-[24px] pb-[20px] flex flex-col gap-[24px]">
                                <li className="flex items-start gap-[8px] text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    <EyeOff color='#8C8B8B' size={28} />
                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] text-black'>Hide similar content</span>
                                        <span className='text-[12px] text-[#777777]'>similar content</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-[8px] text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    <img src='/icons/Block.svg' alt='Block' className='w-[28px] h-[28px]' />
                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] text-black'>Block Person</span>
                                        <span className='text-[12px] text-[#777777]'>hide all</span>
                                    </div>
                                </li>
                                <li className="flex items-start gap-[8px] text-gray-700 hover:bg-gray-100 cursor-pointer">
                                    <img src='/icons/Bell.png' alt='Bell' className='w-[28px] h-[28px]' />
                                    <div className='flex flex-col gap-[4px]'>
                                        <span className='text-[14px] text-black'>Turn on notification</span>
                                        <span className='text-[12px] text-[#777777]'>Get notify</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    )
                }
            </div>
        </div>
    );
}