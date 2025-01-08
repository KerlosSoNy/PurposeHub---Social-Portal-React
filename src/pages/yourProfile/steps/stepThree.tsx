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
        if (selectedCategory.length >= 3) {
            setStep(step + 1)
        } else {
            setShowErrorToast(true)
            setTitle("Please Pick More than 3")
            setBody("Different Categories")
        }
    }
    return (
        <div className='px-[30px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
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
