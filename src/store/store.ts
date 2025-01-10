import {mediaItems} from "../assets/constants/media.ts";

export type Action =
    | { type: 'VIDEO_PLAY' }
    | { type: 'VIDEO_PAUSE' }
    | { type: 'NEXT_STEP' }
    | { type: 'BTN_DISABLED' }
    | { type: 'BTN_UNDISABLED' };

export interface State {
    isVideoAction: boolean;
    videoStep: number;
    pauseVideoStep: number;
    btnDisabled: boolean;
}

export const initialState: State = {
    isVideoAction: false,
    videoStep: 1,
    pauseVideoStep: 1,
    btnDisabled: false,
};

export const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'VIDEO_PLAY':
            return { ...state, isVideoAction: true, pauseVideoStep: state.pauseVideoStep === mediaItems.length ? 1 : state.pauseVideoStep + 1 };
        case 'VIDEO_PAUSE':
            return { ...state, isVideoAction: false };
        case 'NEXT_STEP':
            return { ...state, videoStep: state.videoStep === mediaItems.length ? 1 : state.videoStep + 1 };
        case 'BTN_DISABLED':
            return { ...state, btnDisabled: true };
        case 'BTN_UNDISABLED':
            return { ...state, btnDisabled: false };
        default:
            return state;
    }
};