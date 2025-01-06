import { Link } from "react-router";
import Toast from "../../components/toasts/toast";
import InputAndLabel from "../../components/FormInput/FormInput";
import { Carousel } from "../../components/carousel/carouselComponent";
import { images } from "../../utils/fakeData/constant";
import { useSignUp } from "./hooks/useSignUp";
import { PasswordStrength } from "../../components/password/password";
import { PasswordRequirements } from "../../components/password/passwordChect";
import { getStrengthColor } from "./validation/signupValidation";
import CustomSelectMenu from "../../components/customeSelect/customSelect";

export default function SignUp() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast,
        setShowSuccessToast, requirements, strength,
        showErrorToast, setData,
        showSuccessToast, title, body, checked } = useSignUp();
    return (
        <div className="!bg-white  overflow-x-hidden  flex flex-row justify-center p-[20px] sm:p-[32px]">
            <div className="w-[626px] lg:w-[676px] hidden xl:flex flex-col items-center justify-center rounded-[20px] 2xl:w-[727px] gap-[32px] relative bg-gradient-to-b from-[#018AAF] to-[#46BADA]">
                <img alt="background" className="w-[100%] h-[63%] opacity-25 absolute top-0 left-0" src="/signIn/signIn-Bg.png" />
                <Carousel images={images} classes="pt-[150px]" />
            </div>
            <div className={`flex flex-col items-center  xl:justify-between w-full 
                lg:w-[calc(100%-626px)] 
                pt-[20px] justify-between gap-[32px]`}>
                <div className="flex flex-col justify-center items-start bg-white">
                    <div className="flex flex-col justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Sign Up</h2>
                        <span className="text-[16px] text-[#667085]">Create your account now and explore word</span>
                    </div>
                    <div className="flex flex-col
                    w-full lg:w-[443px] 
                    gap-[0.8vw] 3xl:gap-[clamp(15px,1.5vw,20px)]">
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
                            value={data.birthday}
                            onChange={(e) => setData({ ...data, birthday: e.target.value })}
                            name="birthdate"
                            label="Birthdate"
                            type="date"
                            placeholder="Enter your birthdate"
                            error={error.birthday}
                        />
                        <CustomSelectMenu
                            error={error.gender_id}
                            label="Gender" options={[{ id: 1, name: "Male" }, { id: 2, name: "Female" }]} onChange={(e: any) => setData({
                                ...data,
                                gender_id: e.id
                            })} />
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
                    <PasswordStrength
                        strength={strength}
                        getStrengthColor={getStrengthColor}
                    />

                    <PasswordRequirements requirements={requirements} />
                    <button title="Login" type="button" onClick={handleSubmit} className=" w-full h-[50px] bg-[#018AAF] text-white py-2 rounded-xl mb-[15px] mt-[32px] 3xl:mb-[24px]">
                        Sign Up
                    </button>
                    <div className="flex items-center w-full mb-[15px] 3xl:mb-[24px]">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="px-8 text-gray-500 text-sm font-medium">OR</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>
                    <button className="border-[1px] h-[50px] border-gray-03 w-full text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Sign in with Google account
                        </span>
                    </button>
                    <span className="text-center w-full mt-[24px] mb-4 text-[#475467]">
                        Don't have an account?
                        <Link to='/' className="text-[#018AAF] font-semibold ms-1">Sign In</Link>
                    </span>
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}
