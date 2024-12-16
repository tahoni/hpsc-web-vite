import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HeaderContent} from "./HeaderContent.tsx";
import HPSCLogo from "../../assets/images/logos/hpsc-logo.png";
import NGPSALogo from "../../assets/images/logos/ngpsa-logo.png"
import classes from "./Header.module.scss";

export const Header = (): ReactElement => {
    return (
        <Container fluid className={classes.Header}>
            <Row className={classes.HeaderInner}>
                <Col xs={{span: 6}} md={{span: 2}} className={classes.HeaderLogo}>
                    <Link to="/">
                        <Image src={HPSCLogo} alt="HPSC logo" className={classes.HPSCLogo}/>
                    </Link>
                </Col>
                <Col xs={{span: 12, order: 'last'}} md={{span: 8}} className={classes.HeaderCenter}>
                    <HeaderContent title="Hartbeespoortdam Practical Shooting Club"/>
                </Col>
                <Col xs={{span: 6}} md={{span: 2, order: 'last'}} className={classes.HPSCLogo}>
                    <a href="https://ngpsa.co.za/">
                        <Image src={NGPSALogo} alt="NGPSA logo" className={classes.NGPSALogo}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
