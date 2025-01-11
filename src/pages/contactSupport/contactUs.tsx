import { ContactForm } from "../../components/contactUs/contactUsForm/contactUsForm";
import Navbar from "../../components/navbar/navbar";
import { RightSideBar } from "../../components/rightSide/rightSidebar";
import SideMenu from "../../components/sideMenu/sideMenu";

export default function ContactUs() {
    return (
        <div className="flex flex-col min-h-screen font-inter max-w-screen bg-[#f5f5f5]">
            <Navbar />
            <div className="flex flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
                <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
                    <SideMenu />
                </div>
                <div className="flex flex-col w-[98%] md:w-[70%] xl:w-[55%] gap-[24px]">
                    <ContactForm />
                </div>
                <RightSideBar />
            </div>
        </div>
    )
}
