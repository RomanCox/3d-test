import {FC, useRef, useState} from "react";

import {classNames, Mods} from "../helpers/classNames.ts";

import cls from './VideoPlayer.module.scss'

export const VideoPlayer: FC = () => {
    const [currentImage, setCurrentImage] = useState('/assets/p1.webp');
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const [isVideoEnded, setIsVideoEnded] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const handleImageError = () => {
        setCurrentImage((prev) =>
            prev === '/assets/p1.webp' ? '/assets/p1.jpg' : '/assets/p2.jpg'
        );
    };

    const handleVideoLoaded  = () => {
        setIsVideoLoaded(true);
    };

    const handleVideoEnded = () => {
        setIsVideoEnded(true);
        setCurrentImage('/assets/p2.webp');
    };

    const videoMod: Mods = {
        [cls.videoLoaded]: isVideoLoaded
    }

    return (
        <div className={cls.videoContainer}>
            {!isVideoLoaded || isVideoEnded && (
                <img
                    className={cls.image}
                    src={currentImage}
                    alt="Fallback for Video P1"
                    onError={handleImageError}
                />
            )}
            <video
                ref={videoRef}
                className={classNames(cls.video, videoMod)}
                src="/assets/p1.mp4"
                autoPlay
                muted
                playsInline
                onCanPlayThrough={handleVideoLoaded}
                onEnded={handleVideoEnded}
            />
            <button className={cls.rightBtn} onClick={() => alert('Кнопка нажата!')}/>
        </div>
);
};