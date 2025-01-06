import { useForgetPassword } from './hooks/useForgetPassword';
import { Carousel } from '../../components/carousel/carouselComponent';
import { images } from '../../utils/fakeData/constant';
import { Link } from 'react-router';
import Toast from '../../components/toasts/toast';
import InputAndLabel from '../../components/FormInput/FormInput';

export default function ForgetPassword() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast, setShowSuccessToast, showErrorToast, showSuccessToast, title, body } = useForgetPassword();
    return (
        <div className="!bg-white w-screen relative  flex flex-row justify-center p-[20px] sm:p-[32px]">
            <div className="w-[626px] lg:w-[676px] hidden xl:flex flex-col items-center justify-center rounded-[20px] 2xl:w-[727px] gap-[32px] xl:h-[92.5vh] minxl:h-[92.5vh] 3xl:h-[93.5vh]  relative bg-gradient-to-b from-[#018AAF] to-[#46BADA]">
                <img alt="background" className="w-[100%] h-[63%] opacity-25 absolute top-0 left-0" src="/signIn/signIn-Bg.png" />
                <Carousel images={images} />
            </div>
            <div className={`flex flex-col items-center justify-evenly xl:justify-between  w-full 
            h-[95.5vh]  md:h-[94vh] lg:h-[92vh] lg:w-[calc(100%-626px)] 
            ${error?.email ? "pt-[10px] sm:pt-[47px] xl:pt-[97px] 3xl:pt-[147px]" : "pt-[20px] sm:pt-[50px] xl:pt-[90px] 3xl:pt-[157px]"} `}>
                <div className="flex flex-col justify-center max-w-[434px] over items-start bg-white">
                    <div className="flex flex-col justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px] z-[0]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Forget Password </h2>
                        <span className="text-[16px] text-[#667085] w-[80%] md:w-[60%]">
                            Please input your email to get code
                            verification to reset your password.</span>
                    </div>
                    <div className="flex flex-col
                    w-full  gap-[0.8vw] mb-[32px] 3xl:gap-[clamp(15px,1.5vw,20px)]">
                        <InputAndLabel
                            value={data.email}
                            onChange={handleChange}
                            name="email"
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            error={error.email}
                        />
                    </div>

                    <button title="Login" type="button" onClick={handleSubmit} className=" w-full h-[50px] bg-[#018AAF] text-white py-2 rounded-xl mb-[15px] 3xl:mb-[24px]">
                        Verify Now
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
                        Already have an account?
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
