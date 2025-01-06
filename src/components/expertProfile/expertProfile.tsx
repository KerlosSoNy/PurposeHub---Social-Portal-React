
interface ExpertProfileProps {
    name: string;
    message: string;
    imageUrl: string;
}

export function ExpertProfile({ name, message, imageUrl }: ExpertProfileProps) {
    return (
        <div className="flex items-start space-x-3 p-2">
            <img
                src={imageUrl}
                alt={name}
                className="w-10 h-10 rounded-full object-cover"
            />
            <div className="flex-1">
                <div className="flex items-center gap-[8px]">
                    <span className="font-medium text-[#6D6C6C]">{name}</span>
                    <button className="text-blue-500 text-[16px] hover:text-blue-600 transition-colors">
                        Follow
                    </button>
                </div>
                <p className="text-[#AAAAAA] text-sm mt-1">{message}</p>
            </div>
        </div>
    );
}