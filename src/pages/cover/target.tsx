import {Container} from "react-bootstrap";
import {Images} from "../../utils/images.ts";
import {UnderConstruction} from "../../components/under-construction/under-construction.tsx";

export const CoverTarget = () => {
    return (
        <article id="under-construction">
            <Container fluid>
                <UnderConstruction source={Images.underCoverTargetImage.source}
                       description={Images.underCoverTargetImage.description}/>
            </Container>
        </article>
    )
}
