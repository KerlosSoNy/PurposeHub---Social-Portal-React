import { ProgressBar } from '../../../components/progressBar/progressBar'
import TraineCategorySelector from '../../../components/categoriesCarousel/traineCarousel/traineCategoryCarousel'

interface StepFour {
    setSelectedCategory?: any
    selectedCategory?: any
    setStep: (step: number) => void
    step: number
}

export default function StepFour({ setSelectedCategory, selectedCategory, setStep, step }: StepFour) {
    return (
        <div className='px-[30px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
            <ProgressBar progress={90} text={
                <span className='flex flex-row items-center gap-[6px]'>
                    <span>Keep Going to complete it</span>
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.5578 9.25702L9.58167 10.6643C9.58167 10.6643 8.59358 7.90964 7.84504 6.14306C7.54562 5.42446 6.58748 5.18493 6.13835 4.1669C5.35986 2.43027 6.28806 0.933178 7.18632 2.01109C8.23428 3.26864 9.79126 4.19684 10.1206 4.91545C10.6296 6.11312 11.5578 9.25702 11.5578 9.25702Z" fill="#FFDD67" />
                        <path d="M13.1143 10.3948C13.264 11.3529 13.1442 12.8201 12.3058 14.5567C12.3058 14.5567 10.5991 12.5206 10.3895 11.5625C10.3895 11.5625 9.91048 7.99941 9.40147 5.72383C9.19187 4.79563 8.11397 4.25667 7.84449 2.93923C7.36542 0.66365 8.80263 -0.92327 9.641 0.603766C10.5991 2.37034 12.216 3.86743 12.4256 4.79563C12.7849 6.38255 12.9346 9.01743 13.1143 10.3948Z" fill="#FFDD67" />
                        <path d="M10.5993 8.59824C10.5993 8.59824 10.4496 7.25085 9.94061 4.97527C9.73101 4.04707 8.65311 3.50812 8.38363 2.19068C8.20398 1.41219 8.26386 0.693582 8.47346 0.18457C7.96444 0.573815 7.54526 1.65172 7.81473 2.96917C8.08421 4.28661 9.19206 4.82556 9.37171 5.75376C9.5813 6.74184 9.76096 7.75987 9.76096 7.75987L8.26386 7.19097L10.5993 8.59824Z" fill="#EBA352" />
                        <path d="M12.3955 10.0356C10.4194 8.23904 8.20365 7.13119 6.76644 6.44253C4.64057 5.39456 5.20946 6.83177 1.5865 7.78991C1.10743 7.90968 0.538531 8.26898 0.987659 9.16724C1.40685 10.0356 4.82022 9.37683 5.35917 8.86782C5.35917 8.86782 6.79638 10.6344 8.23359 10.5745C8.23359 10.5745 7.99406 11.7422 8.32342 12.3111C8.32342 12.3111 6.28737 13.3591 5.41906 14.2873L3.02371 12.6704C2.84406 10.1853 2.39493 9.43672 1.16731 9.55648C0.0295188 9.67625 0.149287 10.7542 0.179228 11.6225C0.20917 13.2094 -0.210016 13.4789 0.179228 14.1076C1.64638 16.503 3.53272 18.0001 7.00598 18.0001C8.29348 18.0001 9.13185 17.9702 9.94028 17.5809C11.2577 16.8922 14.5813 12.0417 12.3955 10.0356Z" fill="#FFDD67" />
                        <path d="M12.7852 10.5137C13.5337 12.7893 10.8689 16.532 9.70117 17.1009C8.89274 17.4901 8.08431 17.5201 6.76686 17.5201C3.32355 17.5201 1.46715 16.0529 0 13.6875C0.0299419 13.8073 0.0898256 13.957 0.149709 14.0768C1.6468 16.502 3.53314 17.9991 7.0064 17.9991C8.2939 17.9991 9.13227 17.9692 9.9407 17.58C11.1683 16.9512 14.1326 12.7294 12.7852 10.5137Z" fill="#EBA352" />
                        <path d="M2.57485 12.7299C2.57485 12.7299 4.82049 14.1671 5.35945 14.2569L2.99404 12.67C3.08386 10.1549 2.36526 9.34647 1.13764 9.55606C1.04782 9.58601 0.95799 9.58601 0.868164 9.61595C2.09578 9.46624 2.66468 10.2747 2.57485 12.7299Z" fill="#EBA352" />
                        <path d="M5.35978 8.8671C5.35978 8.8671 6.79699 10.6037 8.2342 10.5738V10.2444C6.79699 10.2744 5.35978 8.53774 5.35978 8.53774C4.82083 9.07669 1.40745 9.73541 0.988268 8.83715C0.928384 8.68745 0.868501 8.53774 0.838559 8.41797C0.808617 8.59762 0.838559 8.83716 0.988268 9.16652C1.40745 10.0348 4.82083 9.37611 5.35978 8.8671Z" fill="#EBA352" />
                    </svg>
                </span>
            } />
            <TraineCategorySelector selectedCategories={selectedCategory} setSelectedCategories={setSelectedCategory} />

            <div className="w-full flex flex-row gap-[24px] justify-end mt-[40px]">
                <button onClick={() => setStep(step - 1)} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-[#018AAF] rounded-[12px] text-[16px] text-center bg-transparent border-[#018AAF] border">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.47533 4.94141L3.41699 9.99974L8.47533 15.0581" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5836 10H3.55859" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Back</span>
                </button>
                <button onClick={() => setStep(step + 1)} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-white rounded-[12px] text-[16px] text-center bg-[#018AAF]">
                    <span>Next</span>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5247 15.0586L17.583 10.0003L12.5247 4.94193" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M3.41641 10L17.4414 10" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}
