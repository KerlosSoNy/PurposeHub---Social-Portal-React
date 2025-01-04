import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { leaderboardUsers } from './constant';
import { SearchBar } from './searchBar';
import { LeaderboardProfile } from './leaderboardProfile';
import LeaderSelectMenu from './leaderSelectMenu';


export function LeaderboardSection() {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredUsers = leaderboardUsers.filter(user =>
        user.username.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-white rounded-[20px] shadow-lg p-4">
            <div className="flex items-center justify-between mb-4  border-b-[1px] pb-[16px]">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-semibold text-gray-900">Leaderboards</h2>
                    <LeaderSelectMenu />
                </div>
                <button title='Next' className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            <div className="grid grid-cols-4 justify-items-center gap-4 mt-4">
                {filteredUsers.map((user) => (
                    <LeaderboardProfile
                        key={user.username}
                        rank={user.rank}
                        imageUrl={user.imageUrl}
                        username={user.username}
                    />
                ))}
            </div>
        </div>
    );
}