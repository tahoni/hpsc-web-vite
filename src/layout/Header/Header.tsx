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
                <Col xs={{span: 6}} md={{span: 2}}
                     className={classes.logo}>
                    <Image src={HPSCLogo} alt="HPSC logo" className={classes.hpscLogo}/>
                </Col>
                <Col xs={{span: 12, order: 'last'}} md={{span: 8}}
                     className={classes.inner}>
                    <HeaderContent title="Hartbeespoortdam Practical Shooting Club"/>
                </Col>
                <Col xs={{span: 6}} md={{span: 2, order: 'last'}}
                     className={classes.logo}>
                    <Image src={NGPSALogo} alt="NGPSA logo" className={classes.ngpsaLogo}/>
                </Col>
            </Row>
        </Container>
    )
}
