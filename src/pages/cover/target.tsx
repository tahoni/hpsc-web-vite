import {Container} from "react-bootstrap";
import {Cover} from "../../components/cover/cover.tsx";
import ipscTargetWithBulletHoles from "../../assets/images/ipsc-target-with-bullet-holes.png";

export const CoverTarget = () => {
    return (
        <article>
            <Container fluid>
                <Cover image={ipscTargetWithBulletHoles}
                       description={'IPSC target with bullet holes'}/>
            </Container>
        </article>
    )
}
