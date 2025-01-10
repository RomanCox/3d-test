import {mediaItems} from "../assets/constants/media.ts";

export type Action =
    | { type: 'VIDEO_PLAY' }
    | { type: 'VIDEO_PAUSE' }
    | { type: 'NEXT_STEP' };

export interface State {
    isVideoAction: boolean;
    videoStep: number;
    pauseVideoStep: number;
}

export const initialState: State = {
    isVideoAction: false,
    videoStep: 1,
    pauseVideoStep: 1,
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'VIDEO_PLAY':
            return { ...state, isVideoAction: true, pauseVideoStep: state.pauseVideoStep === mediaItems.length ? 1 : state.pauseVideoStep + 1 };
        case 'VIDEO_PAUSE':
            return { ...state, isVideoAction: false };
        case 'NEXT_STEP':
            return { ...state, videoStep: state.videoStep === mediaItems.length ? 1 : state.videoStep + 1 };
        default:
            return state;
    }
};