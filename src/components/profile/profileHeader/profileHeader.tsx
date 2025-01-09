import { Camera } from "lucide-react";

interface ProfileHeaderProps {
    coverImage: string;
    profileImage: string;
}

export function ProfileHeader({ coverImage, profileImage }: ProfileHeaderProps) {

    return (
        <div className="relative">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-purple-100">
                <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                />
                <label htmlFor="cover" title='Change profile picture' className="absolute right-4 top-4 p-2 rounded-full bg-black/50 hover:bg-black/70">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_367_25454)">
                            <path d="M2 11.5017V14.0017H4.5L11.8733 6.62833L9.37333 4.12833L2 11.5017ZM13.8067 4.695C14.0667 4.435 14.0667 4.015 13.8067 3.755L12.2467 2.195C11.9867 1.935 11.5667 1.935 11.3067 2.195L10.0867 3.415L12.5867 5.915L13.8067 4.695Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_367_25454">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </label>
                <input accept="image/*" title="Upload Cover" type="file" className="hidden" id="cover" />
            </div>
            <div className="absolute -bottom-9 left-[15px]">
                <div className="rounded-full relative border-4 border-white w-32 h-32 overflow-hidden">
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <label htmlFor="avatar" className="absolute hover:cursor-pointer bottom-3 end-2 z-[100] p-1 rounded-full bg-black/50">
                    <Camera className="w-[16px] h-[16px] text-white" />
                </label>
                <input accept="image/*" title="Upload Image" type="file" className="hidden" id="avatar" />
            </div>
        </div>
    );
}