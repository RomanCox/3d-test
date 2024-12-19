export const imageRename = (image: string | undefined) => {
    if (image) {
        return image.replace('.webp', '.jpg')
    }
    return ""
}