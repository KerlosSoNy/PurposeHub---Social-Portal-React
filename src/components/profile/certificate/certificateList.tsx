import { Certificate, CertificateCard } from "./certificateCard";

interface CertificateListProps {
    certificates: Certificate[];
    title?: string;
}

export function CertificateList({ certificates, title = "Certificates" }: CertificateListProps) {
    return (
        <div className="bg-white ps-[23px] pt-[25px] font-inter pb-[20px] pe-[44px] rounded-[20px]">
            <h2 className="text-[18px] font-semibold text-[#181818]">{title}</h2>

            <div className="divide-y divide-gray-200">
                {certificates.map((certificate) => (
                    <CertificateCard key={certificate.id} certificate={certificate} />
                ))}
            </div>
        </div>
    );
}