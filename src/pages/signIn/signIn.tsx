import { Link } from "react-router";
import { Carousel } from "../../components/carousel/carouselComponent";
import InputAndLabel from "../../components/FormInput/FormInput";
import { useLogin } from "./hooks/useLogin";
import Toast from "../../components/toasts/toast";
import { images } from "../../utils/fakeData/constant";

export default function SignIn() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast,
        setShowSuccessToast,
        showErrorToast,
        showSuccessToast, title, body, checked } = useLogin();
    return (
        <div className="!bg-white w-screen overflow-hidden  flex flex-row justify-center p-[20px] sm:p-[32px]">
            <div className="w-[626px] lg:w-[676px] hidden xl:flex flex-col items-center justify-center rounded-[20px] 2xl:w-[727px] gap-[32px] xl:h-[92.5vh] minxl:h-[92.5vh] 3xl:h-[93.5vh]  relative bg-gradient-to-b from-[#018AAF] to-[#46BADA]">
                <img alt="background" className="w-[100%] h-[63%] opacity-25 absolute top-0 left-0" src="/signIn/signIn-Bg.png" />
                <Carousel images={images} />
            </div>
            <div className={`flex flex-col items-center justify-evenly xl:justify-between  w-full 
                h-[95.5vh]  md:h-[94vh] lg:h-[92vh] minxl:h-[70vh] lg:w-[calc(100%-626px)] 
                ${error?.email || error?.password ? "pt-[10px] sm:pt-[10px] xl:pt-[7px] 3xl:pt-[107px]" : "pt-[20px] sm:pt-[50px] xl:pt-[90px] 3xl:pt-[157px]"} justify-between`}>
                <div className="flex flex-col justify-center items-start bg-white">
                    <div className="flex flex-col justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Sign in </h2>
                        <span className="text-[16px] text-[#667085]">Wecome Back! 👋  Log-in to get started</span>
                    </div>
                    <div className="flex flex-col
                    w-full lg:w-[443px] 
                    gap-[0.8vw] 3xl:gap-[clamp(15px,1.5vw,20px)]">
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
                    <div className="mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px] gap-[10px] w-full flex flex-row justify-between">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="remember"
                                name="rememberMe"
                                onChange={handleChange}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 checked:bg-[#018AAF] border-gray-300 rounded"
                            />
                            <label htmlFor="remember" className="ml-2 text-[14px] text-gray-600">
                                Remember me
                            </label>
                        </div>
                        <Link to='forget-password' className="text-[#018AAF] font-semibold
                    text-end ">Forget password?</Link>
                    </div>
                    <button title="Login" type="button" onClick={handleSubmit} className=" w-full h-[50px] bg-[#018AAF] text-white py-2 rounded-xl mb-[15px] 3xl:mb-[24px]">
                        Sign In
                    </button>
                    <div className="flex items-center w-full mb-[15px] 3xl:mb-[24px]">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="px-8 text-gray-500 text-sm font-medium">OR</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>
                    <button className="border-[1px] h-[50px] border-gray-03 w-full text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Login with Google account
                        </span>
                    </button>
                    <span className="text-center w-full mt-[24px] text-[#475467]">
                        Don't have an account?
                        <Link to='sign-up' className="text-[#018AAF] font-semibold ms-1">Sign up</Link>
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
