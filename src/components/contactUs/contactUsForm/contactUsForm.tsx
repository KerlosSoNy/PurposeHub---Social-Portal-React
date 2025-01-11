import { useState } from 'react';
import { cn } from '../../../utils/cn/cn';
import InputAndLabel from '../../FormInput/FormInput';
import CustomSelectMenu from '../../customeSelect/customSelect';
import { BioInput } from '../../bioInput/bioInput';
import { categories } from './constant';



export function ContactForm() {
    const [, setSelectedCategory] = useState<string | null>(null);
    const [bio, setBio] = useState<string>('');


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

                <div className='bg-white rounded-[20px] px-[21px] py-[32px]'>
                    <form className="gap-[24px] flex flex-col" onSubmit={(e) => e.preventDefault()}>
                        <InputAndLabel isClose label='Full name' placeholder='Enter Your Name' />
                        <CustomSelectMenu label='Issue Type' options={[{ id: 1, name: "Confirm email" }, { id: 2, name: "Confirm email" }, { id: 3, name: "Confirm email" }, { id: 4, name: "Confirm email" }]} />
                        <div className='-mt-3'>
                            <CustomSelectMenu label='Priority Level' options={[{ id: 1, name: "Low" }, { id: 2, name: "Medium" }, { id: 3, name: "High" }]} />
                        </div>
                        <BioInput bio={bio} setBio={setBio} title='Message' placeHolder='Write message here ...' />
                        <button type="button" className="w-full h-[48px] text-center bg-[#018AAF] text-white rounded-[16px] mt-[24px]">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}