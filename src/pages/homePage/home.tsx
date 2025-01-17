import MidComponent from "../../components/midComponent/midComponent"
import Navbar from "../../components/navbar/navbar"
import { RightSideBar } from "../../components/rightSide/rightSidebar"
import SideMenu from "../../components/sideMenu/sideMenu"

export default function Home() {

  return (
    <div className="flex flex-col font-inter max-w-screen bg-[#f5f5f5]">
      <Navbar />
      <div className="flex flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
        <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
          <SideMenu />
        </div>
        <MidComponent />
        <RightSideBar />
      </div>
    </div>
  )
}
