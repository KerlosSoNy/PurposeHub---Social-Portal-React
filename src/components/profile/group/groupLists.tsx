import { useState } from 'react';
import { Search } from 'lucide-react';
import { GroupCard, type Group } from './groupCards';

interface GroupListProps {
    groups: Group[];
    title?: string;
}

export function GroupList({ groups, title = "Groups" }: GroupListProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGroup, setSelectedGroup] = useState<number[]>([]);
    const filteredGroups = groups.filter(group =>
        group.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleJoin = (groupId: number) => {
        if (selectedGroup.includes(groupId)) {
            setSelectedGroup(selectedGroup.filter(id => id !== groupId));
            return
        } else {
            let newGroup = [...selectedGroup, groupId]
            setSelectedGroup(newGroup);
        }
    };

    return (
        <div className="bg-white rounded-[20px] pt-[25px] ps-[23px] pe-[29px] pb-[19px]">
            <h2 className="text-[18px] font-semibold text-[#181818] mb-[20px]">{title}</h2>

            <div className="">
                <div className="relative mb-6 outline-none rounded-[8px] ">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full ps-[42px] outline-none pr-3 py-[14px] rounded-[8px] text-sm placeholder-gray-500 focus:outline-none focus:ring-2 bg-[#f9f9fa] focus:border-transparent"
                    />
                </div>

                <div className="divide-y divide-gray-200">
                    {filteredGroups.map((group) => (
                        <GroupCard selected={selectedGroup} key={group.id} group={group} onJoin={handleJoin} />
                    ))}
                </div>
            </div>
        </div>
    );
}