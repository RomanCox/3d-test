import {FC, useRef, useState} from "react";

import {classNames, Mods} from "../helpers/classNames.ts";
import {mediaItems} from "../assets/constants/media.ts";

import cls from './VideoPlayer.module.scss'
import {Image} from "../components/Image/Image.tsx";

export const VideoPlayer: FC = () => {
    const [currentId, setCurrentId] = useState(1);
    const [currentImage, setCurrentImage] = useState(mediaItems[0].image);
    const [currentSrc, setCurrentSrc] = useState(mediaItems[0].video);
    const [isVideoLoaded, setVideoLoaded] = useState(false);
    const [isLastVideo, setIsLastVideo] = useState(false);

    const videoRef = useRef<HTMLVideoElement>(null);

    const loadNextMedia = async () => {
        if (currentId >= mediaItems.length) {
            setIsLastVideo(true);
            return;
        }

        const nextId = currentId + 1;
        const nextItem = mediaItems.find((item) => item.id === nextId);

        if (nextItem) {
            // setCurrentImage(nextItem.image);
            setCurrentSrc(nextItem.video);
            setCurrentId(nextId);
            setVideoLoaded(false);
        }
    };

    const handleVideoEnd = () => {
        loadNextMedia();
    };

    const handleVideoCanPlay = () => {
        setVideoLoaded(true);
        setCurrentImage('');
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const videoMod: Mods = {
        [cls.videoLoaded]: isVideoLoaded
    }

    return (
        <div className={cls.videoContainer}>
            {currentImage && (
                <Image
                    image={currentImage}
                    alt={`Media ${currentId}`}
                    className={cls.image}
                />
            )}
            <video
                ref={videoRef}
                className={classNames(cls.video, videoMod)}
                src={currentSrc}
                autoPlay={currentId === mediaItems[0].id}
                muted
                playsInline
                onCanPlayThrough={handleVideoCanPlay}
                onEnded={handleVideoEnd}
            />
            <button
                className={cls.rightBtn}
                onClick={handlePlay}
                disabled={isLastVideo || !isVideoLoaded}
            />
        </div>
);
};