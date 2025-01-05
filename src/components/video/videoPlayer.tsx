'use client';
import { CirclePlay } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import VideoPlay from './videoPlay';

export const VideoPlayer = ({ link }: { link: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [thumbnail, setThumbnail] = useState<string | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (video && canvas) {
            video.currentTime = 5; // Set the desired capture time
            video.addEventListener('loadeddata', () => {
                const ctx = canvas.getContext('2d');
                if (ctx) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imageURL = canvas.toDataURL('image/png');
                    setThumbnail(imageURL);
                }
            });
        }
    }, []);
    const openVideo = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };
    return (
        <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-row items-center justify-center z-[5000] w-[150px] h-[100px]'>
            <button
                title='start'
                className='p-2 '
            // onClick={openVideo}
            >
                <CirclePlay color='white'
                    size={48} />
            </button>
            {/* <VideoPlay
                link={link}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            /> */}
        </div>
    );
};
