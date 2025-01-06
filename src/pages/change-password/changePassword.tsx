import { Link } from "react-router";
import { Carousel } from "../../components/carousel/carouselComponent";
import InputAndLabel from "../../components/FormInput/FormInput";
import { images } from "../../utils/fakeData/constant";
import { useChangePassword } from "./hooks/useChangePassword";
import Toast from "../../components/toasts/toast";

export default function ChangePassword() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast, setShowSuccessToast, showErrorToast, showSuccessToast, title, body } = useChangePassword();
    return (
        <div className="!bg-white h-full flex flex-row justify-center p-[20px] sm:p-[32px]">
            <div className="w-[626px] lg:w-[676px] hidden xl:flex flex-col items-center justify-center rounded-[20px] 2xl:w-[727px] gap-[32px]  relative bg-gradient-to-b from-[#018AAF] to-[#46BADA]">
                <img alt="background" className="w-[100%] h-[63%] opacity-25 absolute top-0 left-0" src="/signIn/signIn-Bg.png" />
                <Carousel images={images} />
            </div>
            <div className={`flex flex-col items-center justify-evenly xl:justify-between  w-full 
            lg:w-[calc(100%-626px)] 
            ${error?.password ? "pt-[10px] sm:pt-[47px] xl:pt-[97px] 3xl:pt-[147px]" : "pt-[20px] sm:pt-[50px] xl:pt-[90px] 3xl:pt-[157px]"} gap-[50px]`}>
                <div className="flex flex-col justify-center max-w-[434px] over items-start bg-white">

                    <div className="flex flex-col justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Change your password </h2>
                        <span className="text-[16px] text-[#667085] w-[80%] md:w-[70%]">
                            Please change your current password
                            and confirm it now.</span>
                    </div>

                    <div className="flex flex-col
                    w-full  gap-[24px] mb-[32px] 3xl:gap-[clamp(15px,1.5vw,20px)]">
                        <InputAndLabel
                            value={data.password}
                            onChange={handleChange}
                            name="password"
                            label="Password"
                            type="password"
                            see={true}
                            placeholder="Enter your new password"
                            error={error.password}
                        />
                        <InputAndLabel
                            value={data.confirm_password}
                            onChange={handleChange}
                            name="confirm_password"
                            label="Confirm Password"
                            type="password"
                            see={true}
                            placeholder="Confirm your Password"
                            error={error.confirm_password}
                        />
                    </div>

                    <button title="Login" type="button" onClick={handleSubmit} className=" w-full h-[50px] bg-[#018AAF] text-white py-2 rounded-xl mb-[15px] 3xl:mb-[24px]">
                        Change Password
                    </button>
                    <span className="text-center w-full mt-[24px] text-[#475467]">
                        Already have an account?
                        <Link to='/sign-up' className="text-[#018AAF] font-semibold ms-1">Sign up</Link>
                    </span>
                </div>
                <div className="flex flex-col text-center bg-white pb-3">
                    <span className="text-[#9C9AA5] text-[14px]">By signing up to create an account I accept Company</span>
                    <Link to='/' className="text-[#26203B] text-[14px] ms-1">Terms of use & Privacy Policy.</Link>
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}
