import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ReactNode } from "react";

interface PostType {
    bgColor: string;
    icon: JSX.Element;
    bgImage: string;
    animation: ReactNode;
}

interface TypesOfPosts {
    event: PostType;
    export: PostType;
    achievement: PostType;
    idea: PostType;
}

export const typesOfPosts: TypesOfPosts = {
    event: {
        bgColor: 'bg-[#f3faf7]',
        icon: <img src="/posts/bell.svg" alt="event" className="w-[32px] h-[32px]" />,
        bgImage: "/posts/bg/post-idea-bg-02.png",
        animation: <DotLottieReact
            src="https://lottie.host/cec38b5b-c502-415e-a3e9-a7f90fd640e2/YV2pa1BUSL.lottie"
            loop
            autoplay
        />
    },
    export: {
        bgColor: 'bg-[#eef1fa]',
        icon: <img src="/posts/achievment.svg" alt="export" className="w-[35px] h-[35px]" />,
        bgImage: "/posts/bg/post-idea-bg-03.png",
        animation: <DotLottieReact
            src="https://lottie.host/cec38b5b-c502-415e-a3e9-a7f90fd640e2/YV2pa1BUSL.lottie"
            loop
            autoplay
        />
    },
    achievement: {
        bgColor: 'bg-[#faeeef]',
        icon: <img src="/posts/coin.svg" alt="achievement" className="w-[40px] h-[40px]" />,
        bgImage: "/posts/bg/post-idea-bg-04.png",
        animation: <DotLottieReact
            src="https://lottie.host/cec38b5b-c502-415e-a3e9-a7f90fd640e2/YV2pa1BUSL.lottie"
            loop
            autoplay
        />
    },
    idea: {
        bgColor: 'bg-[#faeef9]',
        icon: <img src="/posts/lampe.svg" alt="idea" className="w-[35px] h-[35px]" />,
        bgImage: "/posts/bg/post-idea-bg.png",
        animation: <DotLottieReact
            src="https://lottie.host/cec38b5b-c502-415e-a3e9-a7f90fd640e2/YV2pa1BUSL.lottie"
            loop
            autoplay
        />
    }
}