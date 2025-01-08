import { useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepFour from "./steps/stepFour";

export default function YourProfile() {
    const [steps, setSteps] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState([])
    return (
        <div className="bg-[#f5f6fa] font-inter mix-w-screen overflow-x-hidden pt-[32px] pb-[106px] flex flex-col">
            <img src="/icons/logo.png" alt="Logo" className="w-[53px] h-[45px] ms-[22px] xl:ms-[60px]" />
            {
                steps === 1 && <StepOne setStep={setSteps} step={steps} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            }
            {
                steps === 2 && <StepTwo setStep={setSteps} step={steps} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            }
            {
                steps === 3 && <StepThree setStep={setSteps} step={steps} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            }
            {
                steps === 4 && <StepFour setStep={setSteps} step={steps} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            }
        </div>
    )
}
