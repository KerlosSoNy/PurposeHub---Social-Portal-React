import { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { RightSideBar } from "../../components/rightSide/rightSidebar";
import SideMenu from "../../components/sideMenu/sideMenu";
import { NavigationTabs } from "../../components/profile/navigation/navigation";
import { WorkInfo } from "../../components/profile/workInfo/workInfo";
import { ProfileInfo } from "../../components/profile/profileInfo/profileInfo";
import { ProfileHeader } from "../../components/profile/profileHeader/profileHeader";
import Definition from "../../components/profile/definition/definition";
import ProfilePosts from "../../components/profile/posts/profilePosts";
import ExperienceComponent from "../../components/profile/experience/experienceComponent";
import CertificateComponent from "../../components/profile/certificate/certificateComponent";
import GroupComponent from "../../components/profile/group/groupComponent";
import { Link, useParams } from "react-router";
import FriendsMenu from "../../components/profile/friendsMenu/friendsMenu";

export default function Profile() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isBlock, setIsBlock] = useState(false);
    const [activeTab, setActiveTab] = useState('Posts');
    const [isFriends, setIsFriends] = useState(false);
    const [follow, setFollow] = useState(false);
    const { id } = useParams();
    const tabs = [
        { name: 'Posts', isActive: activeTab === 'Posts' },
        { name: 'Definition', isActive: activeTab === 'Definition' },
        { name: 'Experiences', isActive: activeTab === 'Experiences' },
        { name: 'Certificates', isActive: activeTab === 'Certificates' },
        { name: 'Groups', isActive: activeTab === 'Groups' },
    ];
    const companies = [
        {
            name: 'Overlanding',
            logo: '/profile/overLanding.svg'
        },
        {
            name: 'Media Growth Inc.',
            logo: '/profile/mediaGrowth.svg'
        }
    ];
    return (
        <div className="flex flex-col min-h-screen font-inter max-w-screen bg-[#f5f5f5]">
            <Navbar />
            <div className="flex flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
                <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="flex flex-col w-[98%] md:w-[70%] xl:w-[55%] gap-[24px]">
                    <div className="bg-white">
                        <ProfileHeader
                            coverImage="https://images.unsplash.com/photo-1579546929518-9e396f3cc809"
                            profileImage="/icons/person.png"
                        />
                        <div className="mt-[12px] flex flex-row w-full justify-end pe-[24px]">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="#CBD5E1" />
                                <path d="M20.0196 10.9102C16.7096 10.9102 14.0196 13.6002 14.0196 16.9102V19.8002C14.0196 20.4102 13.7596 21.3402 13.4496 21.8602L12.2996 23.7702C11.5896 24.9502 12.0796 26.2602 13.3796 26.7002C17.6896 28.1402 22.3396 28.1402 26.6496 26.7002C27.8596 26.3002 28.3896 24.8702 27.7296 23.7702L26.5796 21.8602C26.2796 21.3402 26.0196 20.4102 26.0196 19.8002V16.9102C26.0196 13.6102 23.3196 10.9102 20.0196 10.9102Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                                <path d="M21.8699 11.1995C21.5599 11.1095 21.2399 11.0395 20.9099 10.9995C19.9499 10.8795 19.0299 10.9495 18.1699 11.1995C18.4599 10.4595 19.1799 9.93945 20.0199 9.93945C20.8599 9.93945 21.5799 10.4595 21.8699 11.1995Z" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M23.0195 27.0605C23.0195 28.7105 21.6695 30.0605 20.0195 30.0605C19.1995 30.0605 18.4395 29.7205 17.8995 29.1805C17.3595 28.6405 17.0195 27.8805 17.0195 27.0605" stroke="#475569" stroke-width="1.5" stroke-miterlimit="10" />
                            </svg>
                        </div>

                        <div className="flex flex-row justify-between items-start flex-wrap gap-[8px]">
                            <ProfileInfo
                                name="Omar Ashraf Abo"
                                handle="Them/They"
                                badge={true}
                                bio="Web Developer and Digital UI/UX Designer"
                                following={450}
                                followers={1050}
                            />
                            <WorkInfo companies={companies} />
                        </div>
                        <div className="flex flex-row relative  items-center flex-wrap gap-[8px] my-[32px] ps-[18px]">
                            <div
                                className={`absolute start-3 z-[1000] top-[62px] min-w-[259px] p-0 bg-white shadow-lg rounded-[10px] 
                                transition-all duration-300 ease-in-out ${isMenuOpen ? '-translate-x-0 block' : '-translate-x-[1000px] hidden'}`}
                            >
                                <FriendsMenu setFollow={setFollow} follow={follow} setIsFriends={setIsFriends} isFriends={isFriends} setIsOpen={setIsMenuOpen} setIsBlock={setIsBlock} isBlock={isBlock} isOpen={isMenuOpen} />
                            </div>
                            {id ? <div className="flex flex-row  items-center flex-wrap gap-[8px]">
                                <button id='friendsButton' type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="flex flex-row  rounded-[16px] gap-[4px] h-[40px] py-[6px] ps-[14px] pe-[16px] justify-center items-center text-white bg-[#018AAF]" title="Friends">
                                    <img src="/profile/friends.svg" alt="" />
                                    {isFriends ? 'Friends' : 'Add Friend'}
                                </button>
                                <button className="flex flex-row rounded-[16px] border-[1px] border-[#2F2F2F] gap-[4px] h-[40px] py-[6px] ps-[14px] pe-[16px] justify-center items-center text-[#2F2F2F]" title="Friends">
                                    <img src="/profile/messages.svg" alt="" />
                                    Message
                                </button>
                            </div> : <Link to='/settings' className="flex flex-row rounded-[16px] gap-[4px] h-[40px] py-[6px] ps-[14px] pe-[16px] justify-center items-center text-white bg-[#018AAF]">
                                <img src="/profile/edit.svg" alt="" />
                                <span className="text-[16px] font-semibold">Edit Profile</span>
                            </Link>}
                        </div>
                        <NavigationTabs
                            tabs={tabs}
                            onTabChange={setActiveTab}
                        />

                    </div>

                    <div>
                        {activeTab === 'Posts' && <ProfilePosts />}
                        {activeTab === 'Definition' && <Definition />}
                        {activeTab === 'Experiences' && <ExperienceComponent />}
                        {activeTab === 'Certificates' && <CertificateComponent />}
                        {activeTab === 'Groups' && <GroupComponent />}
                    </div>
                </div>
                <RightSideBar />
            </div>
        </div>
    )
}
