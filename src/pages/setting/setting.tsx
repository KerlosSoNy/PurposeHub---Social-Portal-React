import { Outlet, useNavigate } from "react-router";
import Navbar from "../../components/navbar/navbar";
import SettingSideMenu from "../../components/setting/sideMenu/settingSideMenu";
import SideMenu from "../../components/sideMenu/sideMenu";
import { useLayoutEffect, useState } from "react";
import { NavigationTabs } from "../../components/profile/navigation/navigation";

export default function Setting() {
    const [activeTab, setActiveTab] = useState('Personal Information');
    const navigate = useNavigate();
    const tabs = [
        { name: 'Personal Information', isActive: activeTab === 'Personal Information' },
        { name: 'experiences', isActive: activeTab === 'experiences' },
        { name: 'certificates', isActive: activeTab === 'certificates' },
    ];
    useLayoutEffect(() => {
        if (activeTab === 'Personal Information') {
            navigate('/settings')
        } else {
            navigate(`/settings/${activeTab}`);
        }
    }, [activeTab])

    return (
        <div className="flex flex-col font-inter max-w-screen bg-[#f5f5f5]">
            <Navbar />
            <div className="flex flex-col md:flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
                <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="w-[100%] rounded-lg block md:hidden bg-white">
                    <NavigationTabs
                        tabs={tabs}
                        onTabChange={setActiveTab}
                    />
                </div>
                <SettingSideMenu />
                <Outlet />
            </div>
        </div>
    )
}
