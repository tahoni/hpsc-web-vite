import {Container} from "react-bootstrap";
import {Images} from "../../utils/images.ts";
import {UnderConstruction} from "../../components/under-construction/under-construction.tsx";

export const CoverLady = () => {
    return (
        <article id="under-construction">
            <Container fluid>
                <UnderConstruction source={Images.underCoverLadyImage.source}
                       description={Images.underCoverLadyImage.description}/>
            </Container>
        </article>
    )
}
