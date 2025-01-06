import { useState } from 'react'
import { links } from './constant'
import './styles.css'

export default function SideMenu() {
    const [active, setActive] = useState<number | null>(1)
    return (
        <div className="sticky shadow-lg hidden lg:flex flex-col gap-[30px] 
        rounded-[20px] bg-white h-fit px-[30px] py-[26px] 
        sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[207px] minxl:w-[239px] 2xl:w-[287px] 3xl:w-[337px]
        ">
            {
                links.map((link) => (
                    <div className='flex flex-row items-center gap-[9px] hover:cursor-pointer' onClick={() => setActive(link.id)} key={link.id}>
                        <img src={link.icon} alt={link.name} className={active === link.id ? "active-icon" : ""} />
                        <p className={`text-[16px] font-medium ${active === link.id ? "text-[#018AAF]" : "text-[#8C8B8B]"} `}>{link.name}</p>
                    </div>
                ))
            }
        </div>
    )
}
