
interface PromotionCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

export function PromotionCard({ title, description, imageUrl }: PromotionCardProps) {
    return (
        <div className="flex items-center space-x-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <img
                src={imageUrl}
                alt={title}
                className="w-[clamp(100px,7.5rem,126px)] h-[84px] rounded-lg object-cover"
            />
            <div>
                <h3 className="text-[#474747] text-[16px] font-medium">{title}</h3>
                <p className="text-[#818181] text-[16px]">{description}</p>
            </div>
        </div>
    );
}