import {ReactElement} from "react";
import {ImageSourceDescription} from "@tahoni/tahoni-lib-react/dist";
import {UnderConstructionImages} from "./UnderConstructionImages.ts";
import {CoverCarousel} from "@tahoni/tahoni-lib-react/dist";

export const UnderConstructionCarousel = (): ReactElement => {
    const underConstructionText: string = 'Under Construction';
    const underConstructionSlides: ImageSourceDescription[] = [
        {image: UnderConstructionImages.underConstructionLadyImage.image,
            description: UnderConstructionImages.underConstructionLadyImage.description,
            text: underConstructionText},
        {image: UnderConstructionImages.underConstructionTargetImage.image,
            description: UnderConstructionImages.underConstructionTargetImage.description,
            text: underConstructionText},
    ];

    return (
        <CoverCarousel slides={underConstructionSlides}
                       infinite={true} autoPlay={true}/>
    )
}
