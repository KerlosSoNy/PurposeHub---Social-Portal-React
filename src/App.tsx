import { ExpertTipsSection } from "./components/expertProfile/expertSection"
import { SuggestedGroupsSection } from "./components/groupItems/groupSection"
import { LeaderboardSection } from "./components/leaderBoard/leaderboardSection"
import MidComponent from "./components/midComponent/midComponent"
import Navbar from "./components/navbar/navbar"
import { PromotionsSection } from "./components/promotionCard/promotionSection"
import SideMenu from "./components/sideMenu/sideMenu"
import TrendingCourses from "./components/trendingComponent/trendingSection"

function App() {

  return (
    <div className="flex flex-col max-w-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-row justify-center xl:justify-between gap-[37px] main-body min-w-screen pb-[27px] pt-[calc(64px+32px)]">
        <div className="hidden !w-[clamp(300px,337px,369px)] xl:flex flex-row justify-center relative">
          <SideMenu />
        </div>
        <MidComponent />
        <div className="hidden lg:flex flex-col gap-[24px] w-[clamp(300px,369px,369px)]">
          <PromotionsSection />
          <ExpertTipsSection />
          <LeaderboardSection />
          <SuggestedGroupsSection />
          <TrendingCourses />
        </div>
      </div>
    </div>
  )
}

export default App
