import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import HPSCLogo from "../../assets/images/logos/hpsc-logo.png";
import NGPSALogo from "../../assets/images/logos/ngpsa-logo.png"
import classes from "./Header.module.scss";
import {HeaderContent} from "./HeaderContent.tsx";

export const Header = (): ReactElement => {
    return (
        <Container fluid className={classes.this}>
            <Row>
                <Col>
                    <Image src={HPSCLogo} alt="HPSC logo" className={classes.hpscLogo}/>
                    <HeaderContent title="Hartbeespoortdam Practical Shooting Club"/>
                    <Image src={NGPSALogo} alt="NGPSA logo" height={128} width={128} className={classes.ngpsaLogo}/>
                </Col>
            </Row>
        </Container>
    )
}
