import { useState } from "react";
import StepOne from "./steps/stepOne";
import StepTwo from "./steps/stepTwo";
import StepThree from "./steps/stepThree";
import StepFour from "./steps/stepFour";
import StepFive from "./steps/stepFive";
import Toast from "../../components/toasts/toast";
import { useToast } from "./hook/useToast";
import { ProgressBar } from "../../components/progressBar/progressBar";
import { whatWillBeShowen } from "./function/checkSteps";

export default function YourProfile() {
    const [steps, setSteps] = useState(1);
    const [profileImage, setProfileImage] = useState<File | string | null>(null)
    const [coverImage, setCoverImage] = useState<File | string | null>(null)
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedCourse, setSelectedCourse] = useState([])
    const [selectedTrainers, setSelectedTrainers] = useState([])
    const [selectedExpert, setSelectedExpert] = useState([])
    const [bio, setBio] = useState("")
    const { setShowErrorToast, setShowSuccessToast, setTitle, title, setBody, body, showSuccessToast, showErrorToast
    } = useToast()

    return (
        <div className="bg-[#f5f6fa] font-inter mix-w-screen overflow-x-hidden pt-[32px] pb-[106px] flex flex-col">
            <img src="/icons/logo.png" alt="Logo" className="w-[53px] h-[45px] ms-[22px] xl:ms-[60px]" />
            <div className='px-[20px] md:px-[50px] xl:px-[210px] mt-[45px] flex flex-col gap-[32px]'>
                <ProgressBar text={whatWillBeShowen(steps) && whatWillBeShowen(steps).text} progress={whatWillBeShowen(steps) && whatWillBeShowen(steps).steps} />
            </div>
            {
                steps === 1 && <StepOne setTitle={setTitle} setBody={setBody} setShowErrorToast={setShowErrorToast} setBio={setBio} bio={bio} coverImage={coverImage} setCoverImage={setCoverImage} profileImage={profileImage} setProfileImage={setProfileImage} setStep={setSteps} step={steps} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            }
            {
                steps === 2 && <StepTwo setTitle={setTitle} setBody={setBody} setShowErrorToast={setShowErrorToast} setStep={setSteps} step={steps} selectedCategory={selectedCourse} setSelectedCategory={setSelectedCourse} />
            }
            {
                steps === 3 && <StepThree setTitle={setTitle} setBody={setBody} setShowErrorToast={setShowErrorToast} setStep={setSteps} step={steps} selectedCategory={selectedExpert} setSelectedCategory={setSelectedExpert} />
            }
            {
                steps === 4 && <StepFour setTitle={setTitle} setBody={setBody} setShowErrorToast={setShowErrorToast} setStep={setSteps} step={steps} selectedCategory={selectedTrainers} setSelectedCategory={setSelectedTrainers} />
            }
            {
                // @ts-ignore
                steps === 5 && <StepFive bio={bio} selectedExpert={selectedExpert} selectedTrainers={selectedTrainers} selectedCourse={selectedCourse} selectedCategory={selectedCategory} coverImage={coverImage} profileImage={profileImage} setStep={setSteps} step={steps} />
            }
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}



