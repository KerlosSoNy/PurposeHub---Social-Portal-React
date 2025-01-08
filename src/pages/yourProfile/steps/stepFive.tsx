import { ImageUpload } from '../../../components/imageUploading/imageUploading';
import WaveAvatar from '../../../components/waveAvatar/waveAvatar';
import { useNavigate } from 'react-router';
import ExpertCards from '../../../components/cards/expertCards/expertCards';

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
        <div className='px-[20px] relative font-inter md:px-[50px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>

            <span className='text-[20px] font-semibold text-[#201926]'>
                Over view all info
            </span>
            <div className="flex flex-col gap-[32px]">
                <ImageUpload coverImage={coverImage} />
                <div className="-mt-[90px]">
                    <WaveAvatar profileImage={profileImage} />
                </div>
            </div>
            <span className='text-[#5B5B5D] -mt-8 text-[14px] font-medium'>
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
                                border-[#008AAB] bg-[#ebf2f7]
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
                            <ExpertCards card={card} key={index} />
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
                            <ExpertCards card={card} key={index} />
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
                                border border-[#008AAB]  bg-[#ebf2f7]
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
            <div className="w-full fixed bottom-0 left-0 bg-white lg:bg-transparent p-3 lg:p-0 lg:relative  flex flex-row gap-[24px] border-1 border-gray-300 justify-center lg:justify-end mt-[40px]">
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
