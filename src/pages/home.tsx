import {UnderConstruction} from "../components/under-construction/under-construction.tsx";
import {Images} from "../utils/images.ts";

export const Home = () => {
    return (
        <UnderConstruction source={Images.underCoverLadyImage.source}
                           description={Images.underCoverLadyImage.description}/>
    )
}
