import CustomSelectMenu from "../../../../components/customeSelect/customSelect";
import InputAndLabel from "../../../../components/FormInput/FormInput";

export default function PersonalInformation() {
    return (
        <div className="w-[100%] md:w-[70%] shadow-sm flex flex-col px-[24px] pt-[24px] pb-[48px] bg-white h-fit rounded-[4px]">
            <div className='flex flex-col gap-[0px]'>
                <span className='font-semibold text-[20px] text-[#0F0F0F]'>Personal Information</span>
                <span className='font-[400] text-[12px] text-[#6B7280]'>Please fill all the details of ingredients about the users</span>
            </div>
            <div className="flex flex-col">
                <InputAndLabel shadow={false} isClose isGray label="Full Name" value={"Omar Ashraf"} />
                <InputAndLabel shadow={false} isClose isGray label="Phone Number" value={"+20157855439"} />
                <div>
                    <CustomSelectMenu
                        label="Gender" isGray options={[{ id: 1, name: "Male" }, { id: 2, name: "Female" }]} defaultData={1} />
                </div>
                <div className="-mt-5">
                    <InputAndLabel
                        name="birthdate"
                        label="Birthdate"
                        type="date"
                        placeholder="Select a date"
                    />
                </div>
                <InputAndLabel shadow={false} isClose isGray label="About Me" value={"I am a software developer"} />
            </div>
            <button type="button" className="w-full h-[48px] text-center bg-[#018AAF] text-white rounded-[16px] mt-[24px]">Save changes</button>
        </div>
    )
}
