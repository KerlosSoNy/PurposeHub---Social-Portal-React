import { useState } from 'react'
import { Link } from 'react-router'
import { settingLinks } from '../../sideMenu/constant'

export default function SettingSideMenu() {
    const [active, setActive] = useState<number | null>(1)
    return (
        <div className="min-h-[calc(90vh-64px)] shadow-lg hidden lg:flex flex-col gap-[30px] 
        bg-white px-[30px] py-[26px] 
        sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[297px] minxl:w-[340px] 2xl:w-[337px] 3xl:w-[337px]
        ">
            <div className='flex flex-col gap-[4px]'>
                <span className='font-semibold text-[24px] text-[#272727]'>Settings</span>
                <span className='font-[400] text-[14px] text-[#6B7280]'>Manage the theme that will appear</span>
            </div>
            {
                settingLinks.map((link) => (
                    <Link to={link.link} className='flex flex-row items-center gap-[9px] hover:cursor-pointer' onClick={() => setActive(link.id)} key={link.id}>
                        <img src={link.icon} alt={link.name} className={active === link.id ? "active-icon" : ""} />
                        <p className={`text-[16px] font-medium ${active === link.id ? "text-[#018AAF]" : "text-[#515252]"} `}>{link.name}</p>
                    </Link>
                ))
            }
        </div>
    )
}
