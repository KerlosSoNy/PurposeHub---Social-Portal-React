
interface LeaderboardProfileProps {
  rank: number;
  imageUrl: string;
  username: string;
}

export function LeaderboardProfile({ rank, imageUrl, username }: LeaderboardProfileProps) {
  return (
    <div className="relative w-fit ">
      <img
        src={imageUrl}
        alt={username}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-1.5 py-0.5 text-xs font-medium shadow-sm border border-gray-100">
        #{rank}
      </div>
    </div>
  );
}