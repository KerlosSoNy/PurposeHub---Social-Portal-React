import { Link } from "react-router";
import Toast from "../../components/toasts/toast";
import InputAndLabel from "../../components/FormInput/FormInput";
import { imagesSignUp } from "../../utils/fakeData/constant";
import { useSignUp } from "./hooks/useSignUp";
import { PasswordStrength } from "../../components/password/password";
import { PasswordRequirements } from "../../components/password/passwordChect";
import { getStrengthColor } from "./validation/signupValidation";
import CustomSelectMenu from "../../components/customeSelect/customSelect";
import MainCarousel from "../../components/carousel/mainCarousel";
import Circles from "../../components/circles/circles";
import OrComponent from "../../components/or/orComponent";

export default function SignUp() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast,
        setShowSuccessToast, requirements, strength,
        showErrorToast, setData,
        showSuccessToast, title, body, checked } = useSignUp();
    return (
        <div className="!bg-white font-inter relative max-h-screen overflow-hidden flex flex-row justify-center p-[20px] sm:p-[32px]">
            <MainCarousel images={imagesSignUp} />
            <Circles />
            <div className={`flex flex-col max-h-screen xl:max-h-[calc(100vh-64px] items-center xl:justify-between w-full 
                xl:w-[calc(100%-626px)] overflow-y-scroll 
                pt-[20px] justify-between gap-[32px]`}>
                <div className="flex flex-col relative justify-center items-start bg-white">
                    <div className="flex flex-col items-center xl:items-start justify-start mb-[15px] 3xl:mb-[24px] w-full">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Sign Up</h2>
                        <span className="text-[16px] text-[#667085]">Create your account now and explore word</span>
                    </div>
                    <div className="flex flex-col
                    w-full lg:w-[443px]  z-[2]
                    gap-[clamp(0px,1.5vw,0px)]">
                        <InputAndLabel
                            value={data.full_name}
                            onChange={handleChange}
                            name="full_name"
                            label="Full name"
                            type="text"
                            placeholder="Enter your full name"
                            error={error.full_name}
                        />
                        <InputAndLabel
                            value={data.birthday || ""}
                            onChange={(e) => setData({ ...data, birthday: e.target.value })}
                            name="birthdate"
                            label="Birthdate"
                            type="date"
                            placeholder="Select a date"
                            error={error.birthday}
                        />
                        <div>
                            <CustomSelectMenu
                                error={error.gender_id}
                                label="Gender" options={[{ id: 1, name: "Male" }, { id: 2, name: "Female" }]} onChange={(e: any) => setData({
                                    ...data,
                                    gender_id: e.id
                                })} />
                        </div>
                        <div className="-mt-5">
                            <InputAndLabel
                                value={data.email}
                                onChange={handleChange}
                                name="email"
                                label="Email"
                                type="email"
                                isChecked={checked}
                                placeholder="Enter your email"
                                error={error.email}
                            />
                        </div>
                        <InputAndLabel
                            see={true}
                            value={data.password}
                            onChange={handleChange}
                            name="password"
                            label="Password"
                            placeholder="SH123456789"
                            type="password"
                            error={error.password}
                        />
                    </div>
                    <div className="z-[2]">
                        <PasswordStrength
                            strength={strength}
                            getStrengthColor={getStrengthColor}
                        />

                        <PasswordRequirements requirements={requirements} />
                    </div>
                    <button title="Sign Up" type="button" onClick={handleSubmit} className=" w-full z-[2] h-[50px] bg-[#018AAF] text-white py-2 rounded-xl mb-[15px] mt-[32px] 3xl:mb-[24px]">
                        Sign Up
                    </button>
                    <OrComponent />
                    <button className="border-[1px] z-[1] h-[50px] border-gray-03 w-full text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Sign in with Google account
                        </span>
                    </button>
                    <span className="text-center w-full mt-[24px] mb-4 text-[#475467] z-[1]">
                        Don't have an account?
                        <Link to='/' className="text-[#018AAF] font-semibold ms-1">Sign In</Link>
                    </span>
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}
