import { Link } from 'react-router'

export default function RememberMe({ handleChange }: { handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
    return (
        <div className="mt-[32px] mb-[30px] 3xl:mt-[32px] 3xl:mb-[32px] gap-[10px] w-full flex flex-row justify-between">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    id="remember"
                    name="rememberMe"
                    onChange={handleChange}
                    className="h-4 w-4 accent-[#018AAF] checked:bg-[#018AAF] outline-none border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-[14px] text-gray-600">
                    Remember me
                </label>
            </div>
            <Link to='forget-password' className="text-[#018AAF] font-semibold
                    text-end text-[14px]">Forget password?</Link>
        </div>
    )
}
