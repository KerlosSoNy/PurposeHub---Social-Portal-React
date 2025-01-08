import { useForgetPassword } from './hooks/useForgetPassword';
import { imagesPasswords } from '../../utils/fakeData/constant';
import { Link } from 'react-router';
import Toast from '../../components/toasts/toast';
import InputAndLabel from '../../components/FormInput/FormInput';
import MainCarousel from '../../components/carousel/mainCarousel';
import OrComponent from '../../components/or/orComponent';

export default function ForgetPassword() {
    const { data, handleChange, error, handleSubmit, setShowErrorToast, setShowSuccessToast, showErrorToast, showSuccessToast, title, body } = useForgetPassword();
    return (
        <div className="!bg-white font-inter relative min-h-screen  flex flex-row justify-center p-[20px] sm:p-[32px]">
            <MainCarousel images={imagesPasswords} />

            <div className={`flex flex-col items-center justify-evenly xl:justify-between  w-full 
            lg:w-[calc(100%-626px)] 
            ${error?.email ? "pt-[10px] sm:pt-[47px] xl:pt-[97px] 3xl:pt-[147px]" : "pt-[20px] sm:pt-[50px] xl:pt-[182px] "} gap-[50px]`}>
                <div className="flex flex-col justify-center max-w-[434px] over items-start bg-white">
                    <div className="flex flex-col items-center xl:items-start justify-start mb-[15px] 3xl:mb-[24px]">
                        <img src="/icons/logo.png" alt="logo" className="w-[70px] h-[59px] z-[0]" />
                        <h2 className="text-black text-[32px] font-semibold mt-[20px] mb-[8px] 3xl:mt-[32px] 3xl:mb-[12px]">Forget Password </h2>
                        <span className="text-[16px] text-[#667085] w-[100%] text-center xl:text-start xl:w-[70%]">
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
                    <OrComponent />
                    <button className="border-[1px] h-[50px] border-gray-03 w-full text-black flex flex-row gap-4 items-center justify-center py-3 rounded-xl">
                        <img src="/icons/google.svg" alt="Google" />
                        <span>
                            Login with Google account
                        </span>
                    </button>
                    <span className="text-center w-full mt-[24px] text-[#475467]">
                        Already have an account?
                        <Link to='/' className="text-[#018AAF] font-semibold ms-1">Sign in</Link>
                    </span>
                </div>
                <div className="flex flex-col text-center bg-white pb-3 mt-[30px]">
                    <span className="text-[#9C9AA5] text-[14px]">By signing up to create an account I accept Company</span>
                    <Link to='/' className="text-[#26203B] text-[14px] ms-1">Terms of use & Privacy Policy.</Link>
                </div>
            </div>
            <Toast showErrorToast={showErrorToast} setShowErrorToast={setShowErrorToast} showSuccessToast={showSuccessToast} setShowSuccessToast={setShowSuccessToast} title={title} body={body} />
        </div>
    )
}
