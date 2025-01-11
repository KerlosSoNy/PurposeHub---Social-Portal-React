import { Link } from "react-router";
import InputAndLabel from "../../components/FormInput/FormInput";
import { imagesPasswords } from "../../utils/fakeData/constant";
import { useChangePassword } from "./hooks/useChangePassword";
import Toast from "../../components/toasts/toast";
import MainCarousel from "../../components/carousel/mainCarousel";

export default function ChangePassword() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast, setShowSuccessToast, showErrorToast, showSuccessToast, title, body } = useChangePassword();
    return (
        <div className="!bg-white font-inter min-h-screen flex flex-row justify-center p-[20px] sm:p-[32px]">
            <MainCarousel images={imagesPasswords} />
            <div className={`flex flex-col items-center justify-evenly xl:justify-between w-full 
            xl:w-[calc(100%-626px)] 
            ${error?.password ? "pt-[10px] sm:pt-[47px] xl:pt-[97px] 3xl:pt-[147px]" : "pt-[20px] sm:pt-[50px] xl:pt-[142px] "} gap-[50px]`}>
                <div className="flex flex-col justify-center max-w-[434px] items-start bg-white">

                    <div className="flex flex-col items-center xl:items-start justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Change your password </h2>
                        <span className="text-[16px] text-[#667085] w-[100%] text-center xl:text-start xl:w-[70%]">
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
                        <Link to='/' className="text-[#018AAF] font-semibold ms-1">Sign in</Link>
                    </span>
                </div>
                <div className="flex flex-col text-center bg-white mt-[10px] pb-3">
                    <span className="text-[#9C9AA5] text-[14px]">By signing up to create an account I accept Company</span>
                    <Link to='/' className="text-[#26203B] text-[14px] ms-1">Terms of use & Privacy Policy.</Link>
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}
