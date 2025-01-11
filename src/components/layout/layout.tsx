import React from 'react'
import Navbar from '../navbar/navbar'
import SideMenu from '../sideMenu/sideMenu'
import { RightSideBar } from '../rightSide/rightSidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen font-inter max-w-screen bg-[#f5f5f5]">
            <Navbar />
            <div className="flex flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
                <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="flex flex-col w-[98%] md:w-[70%] lg:w-[79%] xl:w-[79%] 2xl:w-[50%] gap-[24px]">
                    {children}
                </div>
                <RightSideBar />
            </div>
        </div>
    )
}
