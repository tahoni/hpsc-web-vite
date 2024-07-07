import {Container} from "react-bootstrap";
import {Cover} from "../../components/cover/cover.tsx";
import ladyShooterOnIpscRangeImage from "../../assets/images/lady-shooter-on-ipsc-range.png";

export const CoverLady = () => {
    return (
        <article>
            <Container fluid>
                <Cover image={ladyShooterOnIpscRangeImage}
                       description={'Lady shooter on IPSC range'}/>
            </Container>
        </article>
    )
}
