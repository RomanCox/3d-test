import {FC, useEffect, useReducer} from "react";

import {initialState, reducer} from "../store/store.ts";
import {classNames, Mods} from "../helpers/classNames.ts";

import cls from "./VideoPlayer.module.scss";
import {actionVideoLength, mediaItems} from "../assets/constants/media.ts";

export const VideoPlayer: FC = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleVideoPlay  = () => {
        dispatch({ type: 'BTN_DISABLED' });
        dispatch({ type: 'VIDEO_PLAY' });
        setTimeout(() => dispatch({ type: 'BTN_UNDISABLED' }), actionVideoLength);
    };

    const handleNextStep = () => {
        dispatch({ type: 'NEXT_STEP' });
        dispatch({ type: 'VIDEO_PAUSE' });
    };

    const videoPauseMod: Mods = {
        [cls.show]: !state.isVideoAction,
        [cls.hide]: state.isVideoAction
    };

    const videoActionMod: Mods = {
        [cls.show]: state.isVideoAction,
        [cls.hide]: !state.isVideoAction
    };

    useEffect(() => {
        const videoCache: Record<string, HTMLVideoElement> = {};

        const preloadNextVideo = (type: "stop" | "animation", step: number) => {
            const cacheKey = `${type}_${step}`;
            if (!videoCache[cacheKey]) {
                const videoElement = document.createElement("video");
                videoElement.src = `/video/${type}_${step}.mp4`;
                videoElement.preload = "auto";
                videoCache[cacheKey] = videoElement;

                videoElement.oncanplaythrough = () => {
                    console.log(`${cacheKey} preloaded`);
                };
            }
        };

        const nextStep = state.videoStep === mediaItems.length ? 1 : state.videoStep + 1;
        preloadNextVideo("animation", nextStep);
        preloadNextVideo("stop", nextStep);

        return () => {
            for (const key in videoCache) {
                delete videoCache[key];
            }
        };
    }, [state.videoStep]);

    return (
        <div className={cls.videoContainer}>
            <video
                className={classNames(cls.video, videoPauseMod)}
                src={`/video/stop_${state.pauseVideoStep}.mp4`}
                autoPlay
                muted
                playsInline
                loop
            />
            <video
                className={classNames(cls.video, videoActionMod)}
                src={`/video/animation_${state.videoStep}.mp4`}
                autoPlay
                muted
                playsInline
                onEnded={handleNextStep}
            />
            <button className={cls.rightBtn} onClick={handleVideoPlay} disabled={state.btnDisabled}/>
        </div>
    );
};