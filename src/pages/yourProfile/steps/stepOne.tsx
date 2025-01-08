import { BioInput } from "../../../components/bioInput/bioInput";
import CategorySelector from "../../../components/categoriesCarousel/categoriesCarousel";
import { ImageUpload } from "../../../components/imageUploading/imageUploading";
import { ProgressBar } from "../../../components/progressBar/progressBar";
import WaveAvatar from "../../../components/waveAvatar/waveAvatar";

interface StepOne {
    setSelectedCategory?: any
    selectedCategory?: any
    setStep: (step: number) => void
    step: number
}

export default function StepOne({ setSelectedCategory, selectedCategory, setStep, step }: StepOne) {
    return (
        <div className='px-[20px] md:px-[50px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
            <ProgressBar progress={0} text="Complete your profile" />
            <div className="flex flex-col gap-[32px]">
                <ImageUpload />
                <div className="-mt-[90px]">
                    <WaveAvatar />
                </div>
            </div>
            <div className="-mt-[20px]">
                <BioInput />
            </div>
            <CategorySelector selectedCategories={selectedCategory} setSelectedCategories={setSelectedCategory} />
            <div className="w-full flex flex-row justify-end mt-[40px]">
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
