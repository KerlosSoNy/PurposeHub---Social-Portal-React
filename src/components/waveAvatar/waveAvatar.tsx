
export default function WaveAvatar({ setProfileImage, profileImage }: { profileImage: string | File | null, setProfileImage?: any }) {
    return (
        <div className="relative w-[200px] ms-[20vw] sm:ms-0 mt-2 sm:mt-0 h-[150px] flex items-center justify-center">
            <img src="/icons/aroundProfilePic.svg" alt="Wave" className="w-[160px] h-[180px] object-cover absolute -top-3 left-5" />
            {setProfileImage ? <label htmlFor="avatar" className="w-[100px] overflow-hidden hover:cursor-pointer transition-all duration-300 ease-in-out h-[100px] group rounded-full relative  z-10 bg-gray-200">
                <img
                    src={profileImage instanceof File ? URL.createObjectURL(profileImage) : "/icons/person.png"}
                    alt="Avatar"
                    className="w-[115px] h-full rounded-full object-cover"
                />
                <img src="/icons/upLoadCloudWhite.svg" alt="Wave" className="hidden transition-all duration-300 ease-in-out group-hover:block w-[24px] h-[24px] absolute top-10 left-10" />
            </label> :
                <div className="w-[100px] overflow-hidden transition-all duration-300 ease-in-out h-[100px] group rounded-full relative  z-10 bg-gray-200">
                    <img
                        src={profileImage instanceof File ? URL.createObjectURL(profileImage) : "/icons/person.png"}
                        alt="Avatar"
                        className="w-[115px] h-full rounded-full object-cover"
                    />
                </div>
            }
            <input
                id="avatar"
                title='Upload Image'
                type="file"
                className="hidden"
                accept="image/*"
                // @ts-ignore
                onChange={(e) => setProfileImage(e.target.files[0])}
            />
        </div>
    );
};