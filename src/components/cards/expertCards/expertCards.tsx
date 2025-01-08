
export default function ExpertCards({ card, index }: any) {
    return (
        <div
            key={index}
            className={`flex-1 px-[18px] py-[20px]  rounded-[7px] min-w-[234px] cursor-pointer transition-all duration-200
        border border-[#008AAB] shadow-lg bg-[#ebf2f7]
        `}
        >
            <img src={card?.avatar} alt={card?.name} className="w-16 h-16 rounded-full mb-[16px]" />
            <h2 className="text-[16px] font-semibold mb-[12px]">{card?.name}</h2>
            <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.70001 1.6862L2.68668 4.3062C1.40001 5.1462 1.40001 7.0262 2.68668 7.8662L6.70001 10.4862C7.42001 10.9595 8.60668 10.9595 9.32668 10.4862L13.32 7.8662C14.6 7.0262 14.6 5.15287 13.32 4.31287L9.32668 1.69287C8.60668 1.21287 7.42001 1.21287 6.70001 1.6862Z" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3.75374 8.71973L3.74707 11.8464C3.74707 12.6931 4.4004 13.5997 5.2004 13.8664L7.32707 14.5731C7.69374 14.6931 8.3004 14.6931 8.67374 14.5731L10.8004 13.8664C11.6004 13.5997 12.2537 12.6931 12.2537 11.8464V8.75306" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.2666 10V6" stroke="#232738" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="pt-[3px]">{card?.expertise}</span>
            </p>
            <p className="text-[#232738] text-[14px] flex flex-row items-center gap-[4px] font-[400] mb-[8px]">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.00033 7.99967C9.84127 7.99967 11.3337 6.50729 11.3337 4.66634C11.3337 2.82539 9.84127 1.33301 8.00033 1.33301C6.15938 1.33301 4.66699 2.82539 4.66699 4.66634C4.66699 6.50729 6.15938 7.99967 8.00033 7.99967Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13.7268 14.6667C13.7268 12.0867 11.1601 10 8.0001 10C4.8401 10 2.27344 12.0867 2.27344 14.6667" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span className="pt-[3px]">{card?.followers} Followers</span>
            </p>
            <button
                className={`mt-4 px-4 py-2 border-[1px] border-[#018AAF] rounded-[12px]  text-[#018AAF]`}
            >
                Followed
            </button>
        </div>
    )
}
