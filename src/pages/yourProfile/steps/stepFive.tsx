import React from 'react'
import { ProgressBar } from '../../../components/progressBar/progressBar';
import { ImageUpload } from '../../../components/imageUploading/imageUploading';
import WaveAvatar from '../../../components/waveAvatar/waveAvatar';
import { useNavigate } from 'react-router';

interface stepFive {
    step: number;
    setStep: any
    bio: string
    coverImage: File | string | null
    profileImage: File | string | null
    selectedCategory: []
    selectedCourse: []
    selectedTrainers: []
    selectedExpert: []
}

export default function StepFive({ step, setStep, bio, selectedExpert, selectedTrainers, coverImage, profileImage, selectedCategory, selectedCourse }: stepFive) {
    const navigate = useNavigate()
    return (
        <div className='px-[20px] font-inter md:px-[50px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
            <ProgressBar progress={100} text={
                <span className='flex flex-row items-center gap-[17px]'>
                    <span className='pt-1'>You're All Set</span>
                    <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 29L4.29998 27.5L1.05 26L0 29Z" fill="#F7B600" />
                        <path d="M12.4504 16.7015L6.40039 10.6016L5.40039 13.4015L12.4504 16.7015Z" fill="#FFDD7D" />
                        <path d="M5.40078 13.4004L4.30078 16.5504L17.7007 22.8003L18.3507 22.6003L12.4507 16.7004L5.40078 13.4004Z" fill="#F7B600" />
                        <path d="M3.25 19.7008L13.25 24.3507L17.6999 22.8008L4.3 16.5508L3.25 19.7008Z" fill="#FFDD7D" />
                        <path d="M2.15039 22.8492L8.75036 25.9492L13.2503 24.3492L3.25039 19.6992L2.15039 22.8492Z" fill="#F7B600" />
                        <path d="M2.15078 22.8496L1.05078 25.9996L4.30077 27.4996L8.75075 25.9496L2.15078 22.8496Z" fill="#FFDD7D" />
                        <path d="M14.949 14.0999C18.299 17.3999 20.049 21.0999 18.849 22.2999C17.599 23.4999 13.899 21.7999 10.499 18.4499C7.14904 15.1499 5.39904 11.4499 6.59904 10.2499C7.84903 9.04992 11.549 10.7999 14.949 14.0999Z" fill="#493816" />
                        <path d="M10.7505 5.74999C9.95051 4.6 10.8005 4.1 11.9005 4.3C10.8505 3.05 11.5005 2.15001 13.1505 2.50001C13.6505 2.6 12.9505 3.45 12.5005 3.45C13.8505 4.45 13.1005 5.54999 11.6505 5.29999C12.9505 7.04998 10.7505 6.59999 9.75051 6.69999C9.50051 7.99998 11.0005 9.49997 10.5005 9.49997C9.40051 9.49997 7.60052 5.34999 10.7505 5.74999Z" fill="#42ADE2" />
                        <path d="M21.2492 8.15077C20.4992 8.50077 18.3992 5.20079 20.9992 5.15079C19.4992 3.80079 19.6992 3.15079 21.6992 3.1008C19.3992 0.800806 23.0492 0.000809133 23.3992 1.2008C23.4992 1.5508 22.2992 0.900805 21.8992 1.5508C21.4492 2.3008 24.6992 4.25079 21.3492 4.10079C22.5992 5.35078 22.6492 5.95078 20.6992 6.15078C20.9492 6.55078 21.7492 7.95077 21.2492 8.15077Z" fill="#FF8736" />
                        <path d="M22.0996 15.9508L22.8496 15.3008C22.8496 15.3008 23.5496 16.3508 24.0496 16.7508C24.4496 14.9508 24.3496 13.9008 26.3996 15.1008C25.2496 12.0008 27.1496 13.1508 28.9996 14.0008C28.8996 13.2008 28.9996 13.3008 29.7996 13.0508C30.4996 15.7008 28.5996 14.9008 27.0996 14.0508C27.9996 16.4508 27.0496 16.3008 25.1496 15.5008C25.0996 16.5008 24.7996 17.6508 24.1996 17.7508C23.4996 17.9508 22.0996 15.9508 22.0996 15.9508Z" fill="#ED4C5C" />
                        <path d="M16.4996 8.54996C15.5996 9.74996 14.1496 10.4 13.0996 11.4499C11.9996 12.5499 11.3496 15.5499 11.3496 15.5499C11.3496 15.5499 11.7496 12.3999 12.7996 11.1999C13.7496 10.1 15.1496 9.29996 15.8996 8.04996C17.1996 5.74997 15.9996 2.74999 14.2996 0.999995C14.6496 0.699997 15.1496 0.299999 15.3996 0C17.0496 2.04999 18.4496 5.99997 16.4996 8.54996Z" fill="#C28FEF" />
                        <path d="M18.0508 11.099C16.7508 12.049 15.8008 13.449 14.9008 14.749C14.1008 15.899 11.5508 17.349 11.5508 17.349C11.5508 17.349 13.9508 15.699 14.7008 14.499C15.6008 12.999 16.5008 11.449 17.9008 10.349C20.7007 8.19904 24.7507 8.39904 27.9007 9.54903C27.7007 9.99903 27.3507 10.949 27.3507 10.949C27.3507 10.949 20.7007 9.14903 18.0508 11.099Z" fill="#FF8736" />
                        <path d="M23.6004 10.85C22.7504 11.95 22.3504 13.3 21.7004 14.55C21.1004 15.7 20.3004 16.8 19.1504 17.4C17.8504 18.05 15.0004 17.85 15.0004 17.85C15.0004 17.85 17.8504 17.8 19.0504 17C20.2504 16.2 20.9004 14.8 21.3504 13.5C22.2504 11 23.3504 8.30003 25.9504 7.20003C26.1004 7.65003 26.4504 8.60003 26.4504 8.60003C26.4504 8.60003 25.0004 9.00003 23.6004 10.85ZM0.605469 5.66254L2.01946 4.24805L3.43396 5.66204L2.01996 7.07703L0.605469 5.66254Z" fill="#42ADE2" />
                        <path d="M2.58594 10.0976L3.99943 8.68359L5.41342 10.0976L3.99943 11.5116L2.58594 10.0976Z" fill="#FF8736" />
                        <path d="M6.17969 3.41009L7.59368 1.99609L9.00767 3.41009L7.59368 4.82408L6.17969 3.41009Z" fill="#ED4C5C" />
                        <path d="M21.6016 20.3481L23.0156 18.9336L24.4295 20.3481L23.0156 21.7621L21.6016 20.3481Z" fill="#C28FEF" />
                        <path d="M18.4512 25.1952L19.8652 23.7812L21.2797 25.1957L19.8652 26.6097L18.4512 25.1952Z" fill="#ED4C5C" />
                        <path d="M24.6387 26.3032L26.0527 24.8887L27.4667 26.3032L26.0527 27.7172L24.6387 26.3032Z" fill="#FF8736" />
                        <path d="M26.0387 19.8645L27.4527 18.4505L28.8667 19.8645L27.4527 21.279L26.0387 19.8645ZM23.6777 4.91059L25.0917 3.49609L26.5062 4.91059L25.0922 6.32458L23.6777 4.91059Z" fill="#42ADE2" />
                        <path d="M8.52148 13.3964L9.93598 11.9824L11.35 13.3964L9.93598 14.8109L8.52148 13.3964Z" fill="#ED4C5C" />
                    </svg>
                </span>
            } />
            <div className="flex flex-col gap-[32px]">
                <ImageUpload coverImage={coverImage} />
                <div className="-mt-[90px]">
                    <WaveAvatar profileImage={profileImage} />
                </div>
            </div>
            <span className='text-[20px] text-[#201926] font-semibold'>
                Over view all info
            </span>
            <span className='text-[#5B5B5D] text-[14px] font-medium'>
                Bio : {bio}
            </span>
            <div className='flex flex-col gap-[24px]'>
                <span className='text-[20px] font-semibold'>Your interests</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                    {
                        selectedCategory?.map((card: {
                            icon: any,
                            name: string,
                            description: string
                        }, index: number) => (
                            <div
                                key={index}
                                // onClick={() => handleCategoryClick(category)}
                                className={`flex-1 px-[18px] py-[20px]  rounded-[7px] h-[140px] min-w-[234px] cursor-pointer transition-all duration-200
                                border 
                                border-[#008AAB] shadow-lg bg-[#ebf2f7]
                                }
                            `}
                            >
                                <div className="flex flex-col items-start text-start gap-[7px]">
                                    {card.icon}
                                    <h3 className="text-[12px] font-semibold">{card.name}</h3>
                                    <p className="text-[10px] truncate w-full">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-[24px]'>
                <span className='text-[20px] font-semibold'>Your Experters</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                    {
                        selectedExpert?.map((card: {
                            avatar: any,
                            name: string,
                            expertise: string
                            followers: string
                        }, index: number) => (
                            <div
                                key={index}
                                className={`flex-1 px-[18px] py-[20px]  rounded-[7px] min-w-[234px] cursor-pointer transition-all duration-200
                                border border-[#008AAB] shadow-lg bg-[#ebf2f7]
                            `}
                            >
                                <img src={card?.avatar} alt={card?.name} className="w-16 h-16 rounded-full mb-[16px]" />
                                <h2 className="text-[16px] font-semibold mb-[12px]">{card?.name}</h2>
                                <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.70001 1.6862L2.68668 4.3062C1.40001 5.1462 1.40001 7.0262 2.68668 7.8662L6.70001 10.4862C7.42001 10.9595 8.60668 10.9595 9.32668 10.4862L13.32 7.8662C14.6 7.0262 14.6 5.15287 13.32 4.31287L9.32668 1.69287C8.60668 1.21287 7.42001 1.21287 6.70001 1.6862Z" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.75374 8.71973L3.74707 11.8464C3.74707 12.6931 4.4004 13.5997 5.2004 13.8664L7.32707 14.5731C7.69374 14.6931 8.3004 14.6931 8.67374 14.5731L10.8004 13.8664C11.6004 13.5997 12.2537 12.6931 12.2537 11.8464V8.75306" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.2666 10V6" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="pt-[3px]">{card?.expertise}</span>
                                </p>
                                <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00033 7.99967C9.84127 7.99967 11.3337 6.50729 11.3337 4.66634C11.3337 2.82539 9.84127 1.33301 8.00033 1.33301C6.15938 1.33301 4.66699 2.82539 4.66699 4.66634C4.66699 6.50729 6.15938 7.99967 8.00033 7.99967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="pt-[3px]">{card?.followers} Followers</span>
                                </p>
                                <button
                                    className={`mt-4 px-4 py-2 border-[1px] border-[#018AAF] rounded-[12px]  text-[#018AAF]`}
                                >
                                    Followed
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='flex flex-col gap-[24px]'>
                <span className='text-[20px] font-semibold'>Your Top Trainers</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]'>
                    {
                        selectedTrainers?.map((card: {
                            avatar: any,
                            name: string,
                            expertise: string
                            followers: string
                        }, index: number) => (
                            <div
                                key={index}
                                className={`flex-1 px-[18px] py-[20px]  rounded-[7px] min-w-[234px] cursor-pointer transition-all duration-200
                                border border-[#008AAB] shadow-lg bg-[#ebf2f7]
                                      
                            `}
                            >
                                <img src={card?.avatar} alt={card?.name} className="w-16 h-16 rounded-full mb-[16px]" />
                                <h2 className="text-[16px] font-semibold mb-[12px]">{card?.name}</h2>
                                <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M6.70001 1.6862L2.68668 4.3062C1.40001 5.1462 1.40001 7.0262 2.68668 7.8662L6.70001 10.4862C7.42001 10.9595 8.60668 10.9595 9.32668 10.4862L13.32 7.8662C14.6 7.0262 14.6 5.15287 13.32 4.31287L9.32668 1.69287C8.60668 1.21287 7.42001 1.21287 6.70001 1.6862Z" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M3.75374 8.71973L3.74707 11.8464C3.74707 12.6931 4.4004 13.5997 5.2004 13.8664L7.32707 14.5731C7.69374 14.6931 8.3004 14.6931 8.67374 14.5731L10.8004 13.8664C11.6004 13.5997 12.2537 12.6931 12.2537 11.8464V8.75306" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M14.2666 10V6" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="pt-[3px]">{card?.expertise}</span>
                                </p>
                                <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.00033 7.99967C9.84127 7.99967 11.3337 6.50729 11.3337 4.66634C11.3337 2.82539 9.84127 1.33301 8.00033 1.33301C6.15938 1.33301 4.66699 2.82539 4.66699 4.66634C4.66699 6.50729 6.15938 7.99967 8.00033 7.99967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <span className="pt-[3px]">{card?.followers} Followers</span>
                                </p>
                                <button
                                    className={`mt-4 px-4 py-2 border-[1px] border-[#018AAF] rounded-[12px]  text-[#018AAF]`}
                                >
                                    Followed
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='flex flex-col gap-[24px]'>
                <span className='text-[20px] font-semibold'>Your courses</span>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]'>
                    {
                        selectedCourse?.map((card: {
                            image: any,
                            author: string,
                            title: string,
                            expertise: string
                            followers: string
                            subtitle: string
                            rating: number
                        }, index: number) => (
                            <div
                                key={index}
                                className={`flex-1 px-[18px] py-[20px]  rounded-[16px] cursor-pointer transition-all duration-200
                                border border-[#008AAB] shadow-lg bg-[#ebf2f7]
                            `}
                            >
                                <img
                                    src={card.image}
                                    alt={card.subtitle}
                                    className="w-full h-[170px] object-cover rounded-t-lg"
                                />
                                <div className="p-4 mt-[22px]">
                                    <div className="flex flex-row flex-wrap md:flex-nowrap justify-between items-start">
                                        <div>
                                            <h2 className="text-lg font-bold text-gray-800">
                                                {card.title}
                                            </h2>
                                            <p className="text-sm text-gray-500">
                                                {card.subtitle}
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            {[...Array(card.rating)].map((_, i) => (
                                                <span
                                                    key={i}
                                                    className="text-yellow-500 text-[22px]"
                                                >
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="mt-[22px] flex items-center">
                                        <img
                                            src="https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                            alt={card.author}
                                            className="w-6 h-6 rounded-full mr-2"
                                        />
                                        <span className="text-sm text-gray-700">
                                            {card.author}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full flex flex-row gap-[24px] justify-end mt-[40px]">
                <button onClick={() => setStep(step - 1)} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-[#018AAF] rounded-[12px] text-[16px] text-center bg-transparent border-[#018AAF] border">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.47533 4.94141L3.41699 9.99974L8.47533 15.0581" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5836 10H3.55859" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Back</span>
                </button>
                <button onClick={() => navigate('/home')} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-white rounded-[12px] text-[16px] text-center bg-[#018AAF]">
                    <span>Next</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5247 15.0586L17.583 10.0003L12.5247 4.94193" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.41641 10L17.4414 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
