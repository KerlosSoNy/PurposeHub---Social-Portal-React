import { ChevronRight } from 'lucide-react';
import { PromotionCard } from './promotionCards';
import { promotions } from './constant';



export function PromotionsSection() {
    return (
        <div className="bg-white rounded-[20px] shadow-lg p-4 ">
            <div className="flex items-center justify-between mb-4 border-b-[1px] pb-[16px]">
                <h2 className="text-lg font-semibold text-gray-900">Promotion & Ads</h2>
                <button type="button" title='Next' className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-3">
                {promotions.map((promo) => (
                    <PromotionCard
                        key={promo.title}
                        title={promo.title}
                        description={promo.description}
                        imageUrl={promo.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}