import { ChevronRight } from 'lucide-react';
import { ExpertProfile } from './expertProfile';
import { experts } from './constant';



export function ExpertTipsSection() {
    return (
        <div className="bg-white rounded-[20px] shadow-lg p-4">
            <div className="flex items-center justify-between mb-4 border-b-[1px] pb-[16px]">
                <h2 className="text-lg font-semibold text-gray-900">Expert Tips</h2>
                <button title='Next' className="text-blue-500 hover:text-blue-600 transition-colors">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="space-y-4">
                {experts.map((expert) => (
                    <ExpertProfile
                        key={expert.name}
                        name={expert.name}
                        message={expert.message}
                        imageUrl={expert.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
}