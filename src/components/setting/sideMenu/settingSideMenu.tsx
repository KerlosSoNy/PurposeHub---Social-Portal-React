import { settingLinks } from '../../sideMenu/constant';
import { Link, useLocation } from 'react-router';

export default function SettingSideMenu() {
    const location = useLocation();
    console.log(location.pathname.split('/')[2])
    console.log(`/${[location.pathname.split('/')[1], location.pathname.split('/')[2] && location?.pathname.split('/')[2]].join('/')}`)
    return (
        <div
            className="min-h-[calc(90vh-64px)] shadow-lg hidden md:flex flex-col gap-[30px]
            bg-white px-[30px] py-[26px] 
            min-w-[22%]"
        >
            <div className="flex flex-col gap-[4px]">
                <span className="font-semibold text-[24px] text-[#272727]">Settings</span>
                <span className="font-[400] text-[14px] text-[#6B7280]">Manage the theme that will appear</span>
            </div>
            {settingLinks.map((link) => (
                <Link
                    to={link.link}
                    className="flex flex-row items-center gap-[9px] hover:cursor-pointer"
                    key={link.id}
                >
                    <img
                        src={link.icon}
                        alt={link.name}
                        className={(location.pathname.split('/')[2] ? `/${[location.pathname.split('/')[1], location.pathname.split('/')[2]].join('/')}` : location.pathname) === link.link ? 'active-icon' : ''}
                    />
                    <p
                        className={`text-[16px] font-medium ${(location.pathname.split('/')[2] ? `/${[location.pathname.split('/')[1], location.pathname.split('/')[2]].join('/')}` : location.pathname) === link.link ? 'text-[#018AAF]' : 'text-[#515252]'
                            }`}
                    >
                        {link.name}
                    </p>
                </Link>
            ))}
        </div>
    );
}
