export interface MediaItem {
    id: number;
    stopVideo: string;
    actionVideo: string;
}

export const mediaItems: MediaItem[] = [
    { id: 1, stopVideo: '/video/stop_1.webp', actionVideo: '/video/animation_1.mp4' },
    { id: 2, stopVideo: '/video/stop_2.webp', actionVideo: '/video/animation_2.mp4' },
    { id: 3, stopVideo: '/video/stop_3.webp', actionVideo: '/video/animation_3.mp4' },
    { id: 4, stopVideo: '/video/stop_4.webp', actionVideo: '/video/animation_4.mp4' },
];

export const actionVideoLength = 4250;