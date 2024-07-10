import {ImageSourceDescription} from "../../model/ImageSourceDescription.ts";
import {UnderConstructionImages} from "./under-construction-images.ts";
import {CoverCarousel} from "../common/cover-carousel/cover-carousel.tsx";

export const UnderConstructionCarousel = () => {
    const underConstructionText: string = 'Under Construction';
    const underConstructionSlides: ImageSourceDescription[] = [
        {source: UnderConstructionImages.underConstructionLadyImage.source,
            description: UnderConstructionImages.underConstructionLadyImage.description,
            text: underConstructionText},
        {source: UnderConstructionImages.underConstructionTargetImage.source,
            description: UnderConstructionImages.underConstructionTargetImage.description,
            text: underConstructionText},
    ];

    return (
        <CoverCarousel slides={underConstructionSlides}/>
    )
}
