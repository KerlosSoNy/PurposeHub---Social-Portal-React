import { Link, useLocation } from 'react-router';
import { links } from './constant';
import './styles.css';

export default function SideMenu() {
    const location = useLocation()
    return (
        <div
            className="sticky top-24 shadow-lg hidden lg:flex flex-col gap-[30px] 
            rounded-[20px] bg-white h-fit px-[30px] py-[26px] 
            sm:w-[300px] md:w-[300px] lg:w-[300px] xl:w-[240px] minxl:w-[265px] 2xl:w-[287px] 3xl:w-[337px]"
        >
            {links.map((link) => (
                <Link
                    to={link.link}
                    className="flex flex-row items-center gap-[9px] hover:cursor-pointer"
                    key={link.id}
                >
                    <img
                        src={link.icon}
                        alt={link.name}
                        className={location.pathname.includes(link.link) ? 'active-icon' : ''}
                    />
                    <p
                        className={`text-[16px] font-medium ${location.pathname.includes(link.link) ? 'text-[#018AAF]' : 'text-[#8C8B8B]'
                            }`}
                    >
                        {link.name}
                    </p>
                </Link>
            ))}
        </div>
    );
}
