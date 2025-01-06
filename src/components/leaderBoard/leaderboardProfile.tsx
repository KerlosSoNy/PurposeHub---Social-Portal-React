
interface LeaderboardProfileProps {
  rank: number;
  imageUrl: string;
  username: string;
}

export function LeaderboardProfile({ rank, imageUrl, username }: LeaderboardProfileProps) {
  return (
    <div className="relative w-fit flex flex-col items-center justify-center">
      <img
        src={imageUrl}
        alt={username}
        className="w-14 h-14 rounded-full object-cover"
      />
      <div className="  rounded-full px-1.5 py-0.5 text-xs font-medium mt-[6px]">
        #{rank}
      </div>
    </div>
  );
}