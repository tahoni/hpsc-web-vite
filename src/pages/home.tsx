import {Container} from "react-bootstrap";
import {UnderConstruction} from "../components/under-construction/under-construction.tsx";
import ladyShooterOnIpscRangeImage from '../assets/images/lady-shooter-on-ipsc-range.png';
import ipscTargetWithBulletHoles from '../assets/images/ipsc-target-with-bullet-holes.png';

export const Home = () => {
    return (
        <article>
            <Container fluid={true} id="home">
                <UnderConstruction image={ladyShooterOnIpscRangeImage}
                                   description={'Lady shooter on IPSC range'}/>
                <UnderConstruction image={ipscTargetWithBulletHoles}
                                   description={'IPSC target with bullet holes'}/>
            </Container>
        </article>
    )
}
