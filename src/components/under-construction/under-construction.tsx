import {Container} from "react-bootstrap";
import {Cover} from "../cover/cover.tsx";
import ipscTargetWithBulletHoles from "../../assets/images/ipsc-target-with-bullet-holes.png";

export const UnderConstruction = () => {
    return (
        <Container fluid>
            <Cover image={ipscTargetWithBulletHoles}
                   description="IPSC target with bullet holes"
                   text="Under Construction"/>
        </Container>
    )
}
