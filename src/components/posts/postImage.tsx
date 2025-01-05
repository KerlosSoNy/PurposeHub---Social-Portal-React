interface PostImageProps {
    imageUrl: string;
    alt: string;
}

export function PostImage({ imageUrl, alt }: PostImageProps) {
    return (
        <div className="mt-3 me-[12px]">
            <img
                src={imageUrl}
                alt={alt}
                className="w-full h-[300px] object-cover rounded-[20px]"
            />
        </div>
    );
}