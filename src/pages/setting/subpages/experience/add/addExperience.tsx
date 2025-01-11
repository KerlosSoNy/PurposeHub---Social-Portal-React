import { Link } from 'react-router'
import { FileUpload } from '../../../../../components/setting/fileUpload/fileUpload';
import InputAndLabel from '../../../../../components/FormInput/FormInput';
import CustomSelectMenu from '../../../../../components/customeSelect/customSelect';
import CustomTagInput from '../../../../../components/tagInput/tagInput';

export default function AddExperience() {
    return (
        <div className="w-[70%] shadow-sm flex flex-col px-[24px] pt-[24px] pb-[48px] bg-white h-fit rounded-[4px]">
            <div className="flex flex-col w-full gap-[4px] items-start">
                <Link to="/setting/experience" title="Add experience" type="button" >
                    <img src="/settings/back.svg" alt="add" />
                </Link>
                <div className='flex flex-col gap-[0px]'>
                    <span className='font-semibold text-[20px] text-[#0F0F0F]'>Experiences</span>
                    <span className='font-[400] text-[12px] text-[#6B7280]'>Please fill all the details of ingredients about the users</span>
                </div>
                <div className='flex flex-col w-full items-start mt-[24px] mb-[10px]'>
                    <span className='mb-[16px] text-[14px] font-[400] text-[#525252]'>Certificates Image </span>
                    <FileUpload
                        onFileSelect={(file) => {
                            console.log('Selected file:', file);
                        }}
                    />
                </div>
                <InputAndLabel shadow={false} isClose isGray label="Title" value={"Product Designer"} />
                <InputAndLabel shadow={false} isClose isGray label="Certificate Name" value={"Enterprise Design Thinking Practitioner"} />
                <InputAndLabel shadow={false} isClose isGray label="Description" value={"Enterprise Design Thinking Practitioner"} />
                <div className='w-full'>
                    <CustomSelectMenu
                        label="Gender" isGray options={[{ id: 1, name: "Full time" }, { id: 2, name: "Remotely" }, { id: 3, name: "Part time" }]} defaultData={1} />
                </div>
                <div className='w-full -mt-3'>
                    <CustomTagInput onChange={(tags) => { console.log(tags) }} title="Tags" defaultData={["Tag 1", "Tag 2", "Tag 3"]} />
                </div>
                <div className='w-full mt-3 mb-1'>
                    <CustomTagInput onChange={(tags) => { console.log(tags) }} title="Acquired Skills" defaultData={["Tag 1", "Tag 2", "Tag 3"]} />
                </div>
                <InputAndLabel shadow={false} isClose isGray label="Start Date" value={"2023-01-01"} />
                <InputAndLabel shadow={false} isClose isGray label="End Date" value={"2023-05-01"} />
                <button type="button" className="w-full h-[48px] text-center bg-[#018AAF] text-white rounded-[16px] mt-[24px]">Save changes</button>
            </div>
        </div>
    )
}
