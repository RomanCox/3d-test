import {classNames, Mods} from "../../helpers/classNames.ts";

import cls from "./Image.module.scss";
import {imageRename} from "../../helpers/imageRename.ts";

interface ImageProps {
    className?: string;
    image?: string;
    contain?: boolean;
    alt?: string;
}

export const Image = (props: ImageProps) => {
    const {
        className,
        image = "",
        contain,
        alt,
    } = props;

    const imageMods: Mods = {
        [cls.isContain]: contain
    };

    return (
        <div className={classNames(cls.imageContainer, imageMods, [className])}>
            <picture>
                <source srcSet={imageRename(image)}/>
                <img src={image} alt={alt}/>
            </picture>
        </div>
    )
}