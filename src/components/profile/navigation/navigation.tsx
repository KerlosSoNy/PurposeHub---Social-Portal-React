
interface Tab {
    name: string;
    isActive: boolean;
}

interface NavigationTabsProps {
    tabs: Tab[];
    onTabChange: (tabName: string) => void;
}

export function NavigationTabs({ tabs, onTabChange }: NavigationTabsProps) {
    return (
        <nav className="flex flex-wrap border-b mt-4">
            {tabs.map((tab) => (
                <button
                    key={tab.name}
                    onClick={() => onTabChange(tab.name)}
                    className={`px-4 py-[8px] hover:bg-gray-50 font-medium text-[16px] relative ${tab.isActive
                        ? 'text-black after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-[#00A3D7]'
                        : 'text-[#7E939A]'
                        }`}
                >
                    {tab.name}
                </button>
            ))}
        </nav>
    );
}