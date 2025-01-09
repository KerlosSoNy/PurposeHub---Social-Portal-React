import { useState, useRef } from 'react';
import { Image as ImageIcon } from 'lucide-react';

export function ImageUpload({ coverImage, setCoverImage }: {
    coverImage: File | string | null, setCoverImage?: any
}) {
    const [image, setImage] = useState<string | null>(null);
    const [, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleImageUpload(file);
        }
    };

    const handleImageUpload = (file: File) => {
        if (file.size > 10 * 1024 * 1024) { // 10MB limit
            alert('File size should be less than 10MB');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            setImage(e.target?.result as string);
        };
        reader.readAsDataURL(file);
    };

    const handleClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setCoverImage(file);
        }
    };

    return (
        <div className="space-y-4 hover:cursor-pointer">
            <h3 className="text-[16px] mb-[24px] font-medium text-[#201926]">Upload your personal image <span className='font-[400]'>(Optional)</span></h3>

            <div
                className={`relative border-2 border-dashed bg-white rounded-[8px] ${setCoverImage ? "p-8" : "p-0"} transition-colors border-[#1849D6]`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={handleClick}
            >
                <input
                    title='Upload Image'
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                {setCoverImage ? <div className="flex flex-col items-center justify-center space-y-2">
                    {coverImage ? (
                        <div className="relative">
                            <img
                                // @ts-ignore
                                src={coverImage instanceof File ? URL.createObjectURL(coverImage) : image}
                                alt="Preview"
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1.5 shadow-md">
                                <ImageIcon className="w-4 h-4 text-blue-500" />
                            </div>
                        </div>
                    ) : (
                        <img src="/icons/uploadCloud.svg" alt="Upload" className="w-[36px] h-[36px] " />
                    )}
                    <div className="text-center">
                        <p className="text-sm font-[400] text-black mt-[8px]">Drag your image (cover) or <span className='text-[#018AAF]'>browse</span></p>
                        <p className="text-xs text-gray-500 mt-[8px]">Max 10 MB image are allowed</p>
                    </div>
                </div> :
                    <img // @ts-ignore
                        src={coverImage instanceof File ? URL.createObjectURL(coverImage) : image}
                        alt="Preview"
                        className='max-h-[169px] w-full object-cover'
                    />}
            </div>
        </div>
    );
}