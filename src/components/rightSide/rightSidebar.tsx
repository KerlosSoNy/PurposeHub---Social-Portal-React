import { PromotionsSection } from "../promotionCard/promotionSection";
import { ExpertTipsSection } from "../expertProfile/expertSection";
import { LeaderboardSection } from "../leaderBoard/leaderboardSection";
import { SuggestedGroupsSection } from "../groupItems/groupSection";
import TrendingCourses from "../trendingComponent/trendingSection";
import { useEffect, useState } from "react";

export function RightSideBar() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="hidden lg:flex flex-col gap-[24px] ">
            <PromotionsSection />
            <ExpertTipsSection />
            <LeaderboardSection />
            <SuggestedGroupsSection />
            <div className="sticky top-24 flex flex-col gap-[24px]">
                <TrendingCourses />
            </div>
        </div>
    );
}