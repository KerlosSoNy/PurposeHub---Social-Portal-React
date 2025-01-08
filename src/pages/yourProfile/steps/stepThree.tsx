import { ProgressBar } from '../../../components/progressBar/progressBar'
import ExpertCategorySelector from '../../../components/categoriesCarousel/expertCategory/expertCategoryCarousel'

interface StepThree {
    setSelectedCategory?: any
    selectedCategory?: any
    setStep: (step: number) => void
    step: number
    setShowErrorToast?: any
    setTitle?: any
    setBody?: any
}

export default function StepThree({ setSelectedCategory, setShowErrorToast, setTitle, setBody, selectedCategory, setStep, step }: StepThree) {
    const nextStep = () => {
        if (selectedCategory.length > 3) {
            setStep(step + 1)
        } else {
            setShowErrorToast(true)
            setTitle("Please Pick More than 3")
            setBody("Different Categories")
        }
    }
    return (
        <div className='px-[30px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
            <ProgressBar progress={70} text={
                <span className='flex flex-row items-center gap-[4px]'>
                    <span>You have another one step</span>
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.0467308 14.3085C-0.2906 11.7598 1.28361 7.67435 2.03324 2.16461C2.18316 1.1901 7.2806 0.140625 9.6794 0.140625C10.2791 0.140625 10.8038 2.95172 10.6539 3.92623C10.5415 4.63837 9.52948 4.45096 9.52948 4.45096C9.19215 5.38799 8.18015 5.01318 8.18015 5.01318C7.8803 5.80029 6.98076 5.42548 6.98076 5.42548C6.60594 6.1751 5.78136 5.80029 5.78136 5.80029C5.03173 9.06115 6.41854 8.7613 7.43053 13.6713C7.43053 13.6713 7.73038 13.6339 8.51749 12.0222C11.7409 5.53792 23.0602 7.59939 22.3855 14.5709C22.2356 16.1076 23.8848 18.6563 17.7753 20.5679C12.9403 22.0671 7.01824 19.1811 7.01824 19.1811C4.99425 19.8183 1.05872 19.7808 0.94628 18.2815C0.833836 16.5199 0.234137 15.6204 0.0467308 14.3085Z" fill="#FFDD67" />
                        <path d="M22.4236 14.5718C22.5736 12.9226 22.0863 11.5733 21.1867 10.5987C21.7115 11.4983 21.9739 12.5853 21.8614 13.8596C21.7115 15.3963 23.3607 17.9451 17.2512 19.8566C12.4161 21.3559 6.49411 18.4698 6.49411 18.4698C4.9199 18.9571 2.14629 19.032 0.984375 18.3199C1.1343 19.7816 5.03235 19.8191 7.05633 19.1819C7.05633 19.1819 12.9784 22.068 17.8134 20.5688C23.8854 18.6572 22.2737 16.1085 22.4236 14.5718ZM5.36968 5.76367C4.43265 9.58676 5.96938 9.43683 6.98137 14.2719L7.50611 13.7097C6.75648 8.83713 5.48212 9.43683 5.78197 5.83863C5.55708 5.83863 5.36968 5.76367 5.36968 5.76367Z" fill="#EBA352" />
                        <path d="M10.2046 16.6706C13.3155 17.8325 18.0007 16.6331 20.6619 15.3962C19.4999 18.2073 13.3155 19.7065 10.2046 16.6706ZM8.66787 1.19082C8.44298 0.778528 7.99321 0.81601 7.69336 0.928453C7.73084 0.478679 8.8178 0.141348 8.66787 1.19082Z" fill="#EBA352" />
                        <path d="M10.9544 2.80235C10.8419 1.97776 10.5796 1.15318 10.0923 0.478516C10.3547 1.19066 10.5046 1.94028 10.5046 2.68991C10.5046 3.02724 10.5796 4.22664 9.97988 4.07671C9.60507 3.96427 9.60507 3.66442 9.49262 3.32709C9.3427 2.80235 9.04285 2.24013 9.08033 1.7154C8.9304 2.24013 9.11781 2.87731 9.15529 3.40205C9.19277 3.7019 9.41766 4.56397 9.00537 4.67641C8.78048 4.75137 8.51811 4.60145 8.3307 4.48901C8.25574 4.45152 8.21826 4.15167 8.18078 4.03923C8.03085 3.51449 7.73101 2.91479 7.76849 2.35258C7.61856 2.83983 7.76849 3.43953 7.80597 3.96427C7.84345 4.26412 7.99337 4.97626 7.61856 5.12619C7.16879 5.35107 7.13131 4.82634 7.05634 4.56397C6.90642 4.07671 6.68153 3.51449 6.68153 2.98976C6.53161 3.62694 6.71901 4.37656 6.71901 5.01374C6.71901 5.35107 6.00687 5.61344 5.7445 5.42604C5.33221 5.12619 5.25725 4.37656 5.18228 3.88931C5.29473 4.03923 5.48213 4.26412 5.70702 4.22664C5.51961 4.00175 5.40717 3.66442 5.29473 3.40205C5.18228 3.17716 4.91991 2.68991 4.62006 2.68991C4.65755 2.76487 4.91991 3.40205 4.88243 3.43953C4.76999 3.62694 4.65755 3.85182 4.50762 4.03923C4.39518 4.18916 4.05785 4.71389 3.79548 4.56397C3.49563 4.37656 3.42067 3.92679 3.3457 3.62694C3.38318 4.00175 3.3457 4.56397 3.72052 4.78885C4.05785 5.01374 4.47014 4.67641 4.69503 4.45152C4.76999 5.20115 5.10732 6.21314 6.04435 6.13818C6.23176 6.13818 6.45664 6.06322 6.64405 5.98825C6.79398 5.91329 6.98138 5.72589 7.13131 5.80085C7.5436 5.91329 7.95589 5.83833 8.25574 5.53848C8.40567 5.38855 8.36819 5.31359 8.55559 5.35107C8.78048 5.38855 9.00537 5.42604 9.19277 5.35107C9.38018 5.31359 9.5301 5.20115 9.64255 5.05122C9.71751 4.97626 9.75499 4.9013 9.79247 4.78885C9.86743 4.63893 9.9424 4.71389 10.0923 4.71389C11.0668 4.71389 11.0294 3.47701 10.9544 2.80235Z" fill="#EBA352" />
                        <path d="M10.0172 0.665659C9.79229 0.253365 9.34252 0.290846 9.04267 0.40329C9.08015 -0.00900333 10.2046 -0.346334 10.0172 0.665659ZM7.5809 1.75261C7.35602 1.34032 6.90624 1.3778 6.60639 1.49025C6.64387 1.04047 7.73083 0.70314 7.5809 1.75261ZM6.30654 2.35231C6.08165 1.94002 5.63188 1.9775 5.33203 2.08994C5.36951 1.64017 6.49395 1.30284 6.30654 2.35231Z" fill="#EBA352" />
                    </svg>
                </span>
            } />
            <ExpertCategorySelector selectedCategories={selectedCategory} setSelectedCategories={setSelectedCategory} />

            <div className="w-full flex flex-row gap-[24px] justify-end mt-[40px]">
                <button onClick={() => setStep(step - 1)} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-[#018AAF] rounded-[12px] text-[16px] text-center bg-transparent border-[#018AAF] border">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.47533 4.94141L3.41699 9.99974L8.47533 15.0581" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.5836 10H3.55859" stroke="#018AAF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>Back</span>
                </button>
                <button onClick={nextStep} title="Next" type="button" className="w-[172px] flex flex-row justify-center items-center gap-[10px] h-[56px] text-white rounded-[12px] text-[16px] text-center bg-[#018AAF]">
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
