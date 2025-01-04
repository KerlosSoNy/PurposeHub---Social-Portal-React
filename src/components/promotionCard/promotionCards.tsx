
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
                className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
                <h3 className="text-gray-900 font-medium">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
            </div>
        </div>
    );
}