import { useState, useCallback } from 'react';
import { Image as ImageIcon, X } from 'lucide-react';

interface FileUploadProps {
    maxSize?: number;
    onFileSelect?: (file: File) => void;
    className?: string;
}

export function FileUpload({ maxSize = 2 * 1024 * 1024, onFileSelect, className }: FileUploadProps) {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFile = useCallback((file: File) => {
        setError(null);

        if (!file.type.startsWith('image/')) {
            setError('Please upload an image file');
            return;
        }

        if (file.size > maxSize) {
            setError(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        onFileSelect?.(file);
    }, [maxSize, onFileSelect]);

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if (e.type === 'dragleave') {
            setIsDragging(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            handleFile(file);
        }
    }, [handleFile]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            handleFile(file);
        }
    }, [handleFile]);

    const removeImage = useCallback(() => {
        setPreview(null);
        setError(null);
    }, []);

    return (
        <div className={`w-full  mx-auto ${className}`}>
            <div
                className={`
                    relative border-2 border-dashed rounded-lg p-6 transition-colors
                    ${isDragging ? 'border-primary bg-primary/5' : 'border-muted-foreground/25'}
                    ${preview ? 'bg-background' : 'bg-muted/50'}
                    hover:border-primary/50 cursor-pointer
                `}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
            >
                <input
                    title="file"
                    id="fileInput"
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleChange}
                    accept="image/*"
                />

                <div className="flex flex-col items-center justify-center">
                    {preview ? (
                        <div className="relative">
                            <img
                                src={preview}
                                alt="Preview"
                                className="max-h-48 rounded-lg object-contain"
                            />
                            <button
                                title='Remove'
                                onClick={(e) => {
                                    e.stopPropagation();
                                    removeImage();
                                }}
                                className="absolute -top-2 -right-2 p-1 rounded-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    ) : (
                        <>
                            <div className="p-4 rounded-full bg-muted">
                                {isDragging ? (
                                    <ImageIcon className="h-8 w-8 text-primary animate-pulse" />
                                ) : (
                                    <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.5002 28.4173C22.6043 28.4173 28.4168 22.6048 28.4168 15.5007C28.4168 8.39648 22.6043 2.58398 15.5002 2.58398C8.396 2.58398 2.5835 8.39648 2.5835 15.5007C2.5835 22.6048 8.396 28.4173 15.5002 28.4173Z" stroke="#347C9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.3335 15.5H20.6668" stroke="#347C9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M15.5 20.6673V10.334" stroke="#347C9B" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <div className="text-center">
                                {/* <p className="text-sm font-medium">
                                    {isDragging ? 'Drop your image here' : 'Drag & drop your image here'}
                                </p> */}
                                <p className="text-[12px] font-[400] text-brand">
                                    Add Attachments
                                </p>
                                <p className="text-[10px] font-[400] mt-1">
                                    Max file is 200KB,JPG
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>

            {error && (
                <p className="text-sm text-destructive mt-2">{error}</p>
            )}
        </div>
    );
}