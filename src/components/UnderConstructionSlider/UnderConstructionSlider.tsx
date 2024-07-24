import {ReactElement} from "react";
import {CoverSlider, ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";
import {UnderConstructionImages} from "./UnderConstructionImages.ts";
import "./UnderConstructionSlider.scss";

export const UnderConstructionSlider = (): ReactElement => {
    const underConstructionText: string = 'Under Construction';
    const underConstructionSlides: ImageWithSourceAndDescription[] = [
        {image: UnderConstructionImages.underConstructionLadyImage.image,
            description: UnderConstructionImages.underConstructionLadyImage.description,
            text: underConstructionText},
        {image: UnderConstructionImages.underConstructionTargetImage.image,
            description: UnderConstructionImages.underConstructionTargetImage.description,
            text: underConstructionText},
    ];

    return (
        <CoverSlider slides={underConstructionSlides}
                     infinite={true} autoPlay={false}/>
    )
}
