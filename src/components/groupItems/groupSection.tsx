import { ChevronRight } from 'lucide-react';
import { groups } from './constant';
import { GroupItem } from './grouptItems';


export function SuggestedGroupsSection() {
    const handleJoin = (groupName: string) => {
        console.log(`Joined ${groupName} group`);
    };

    return (
        <div className="bg-white rounded-[20px] shadow-lg p-4">
            <div className="flex items-center justify-between mb-4 border-b-[1px] pb-[16px]">
                <h2 className="text-lg font-semibold text-gray-900">Suggested Groups</h2>
                <button title='Next' className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="divide-y divide-gray-100">
                {groups.map((group) => (
                    <GroupItem
                        key={group.name + group.memberCount}
                        name={group.name}
                        memberCount={group.memberCount}
                        imageUrl={group.imageUrl}
                        onJoin={() => handleJoin(group.name)}
                    />
                ))}
            </div>
        </div>
    );
}