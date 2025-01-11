import { Plus } from 'lucide-react'
import { Link } from 'react-router'
import { CertificateCard } from '../../../../components/profile/certificate/certificateCard';

export default function Certificates() {
    const certificates = [
        {
            id: 1,
            title: "Enterprise Design Thinking Practitioner",
            organization: "IBM",
            issueDate: "Jun 2016",
            endDate: "Present",
            logoUrl: "https://images.unsplash.com/photo-1569396116180-210c182bedb8?w=64&h=64&fit=crop&auto=format"
        },
        {
            id: 2,
            title: "Enterprise Design Thinking Practitioner",
            organization: "Google",
            issueDate: "Jun 2016",
            endDate: "Present",
            logoUrl: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=64&h=64&fit=crop&auto=format"
        }
    ];
    return (
        <div className="w-[100%] md:w-[70%] shadow-sm flex flex-col px-[24px] pt-[24px] pb-[48px] bg-white h-fit rounded-[4px]">
            <div className="flex flex-row justify-between items-start">
                <div className='flex flex-col max-w-[80%] gap-[0px]'>
                    <span className='font-semibold text-[20px] text-[#0F0F0F]'>Certificates</span>
                    <span className='font-[400] text-[12px] text-[#6B7280]'>Please fill all the details of ingredients about the users</span>
                </div>
                <Link to="/settings/certificates/add" title="Add experience" type="button" className="bg-[#018AAF] w-[34px] h-[34px] rounded-[12px] flex items-center justify-center">
                    <Plus className="w-[24px] h-[24px] text-[#fff]" />
                </Link>
            </div>
            <div className="bg-white ps-[23px] pt-[25px] font-inter pb-[20px] pe-[44px] rounded-[20px]">
                <div className="divide-y divide-gray-200">
                    {certificates.map((certificate) => (
                        <CertificateCard isEditable key={certificate.id} certificate={certificate} />
                    ))}
                </div>
            </div>
        </div>
    )
}
