import { CertificateList } from "./certificateList";

export default function CertificateComponent() {
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
        <div className="w-[90vw] flex flex-col md:w-[clamp(350px,48.4rem,1468px)] 2xl:w-[clamp(350px,60rem,1668px)] max-w-4xl">
            <CertificateList certificates={certificates} />
        </div>
    )
}
