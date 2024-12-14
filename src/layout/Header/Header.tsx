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
                <Col xs={6} sm={1} className={classes.logo}>
                    <Image src={HPSCLogo} alt="HPSC logo" className={classes.hpscLogo}/>
                </Col>
                <Col xs={{span: 12, order: 'last'}} sm={10} className={classes.inner}>
                    <HeaderContent title="Hartbeespoortdam Practical Shooting Club"/>
                </Col>
                <Col xs={6} sm={{span: 1, order: 'last'}} className={classes.logo}>
                    <Image src={NGPSALogo} alt="NGPSA logo" className={classes.ngpsaLogo}/>
                </Col>
            </Row>
        </Container>
    )
}
