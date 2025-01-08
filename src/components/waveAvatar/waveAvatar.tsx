
export default function WaveAvatar() {
    return (
        <div className="relative w-[200px] h-[150px] flex items-center justify-center">
            <img src="/icons/aroundProfilePic.svg" alt="Wave" className="w-[160px] h-[180px] object-cover absolute -top-3 left-5" />
            <label htmlFor="avatar" className="w-[100px] hover:cursor-pointer transition-all duration-300 ease-in-out h-[100px] group rounded-full relative  z-10 bg-gray-200">
                <img
                    src="/icons/person.png"
                    alt="Avatar"
                    className="w-[115px] rounded-full object-cover"
                />
                <img src="/icons/upLoadCloudWhite.svg" alt="Wave" className="hidden transition-all duration-300 ease-in-out group-hover:block w-[24px] h-[24px] absolute top-10 left-10" />
            </label>
            <input
                id="avatar"
                title='Upload Image'
                type="file"
                className="hidden"
                accept="image/*"
            />
        </div>
    );
};