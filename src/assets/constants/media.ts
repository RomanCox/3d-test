export interface MediaItem {
    id: number;
    image: string;
    video: string;
}

export const mediaItems: MediaItem[] = [
    { id: 1, image: '/assets/p1.webp', video: '/assets/p1.mp4' },
    { id: 2, image: '/assets/p2.webp', video: '/assets/p2.mp4' },
    { id: 3, image: '/assets/p3.webp', video: '/assets/p3.mp4' },
    { id: 4, image: '/assets/p4.webp', video: '/assets/p4.mp4' },
];