
export interface Certificate {
    id: number;
    title: string;
    organization: string;
    issueDate: string;
    endDate: string;
    logoUrl: string;
}

interface CertificateCardProps {
    certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
    return (
        <div className="flex items-start gap-[12px] pt-[24px] pb-[16px]">
            <div className="flex-shrink-0">
                <img
                    src={certificate.logoUrl}
                    alt={certificate.organization}
                    className="w-[41.5px] h-[41.5px] rounded-full object-cover"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-[#181818] font-[400] text-[16px]">{certificate.title}</h3>
                <p className="text-[16px] text-[#575757] font-[400]">{certificate.organization}</p>
                <p className="text-[14px] text-[#5C5C5C] font-[400]">
                    Issued {certificate.issueDate} — {certificate.endDate}
                </p>
            </div>
        </div>
    );
}