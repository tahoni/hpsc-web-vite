import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HeaderContent} from "./HeaderContent.tsx";
import {ngpsaLogo} from "../../constants/AppConstants.ts";
import HPSCLogo from "../../assets/images/logos/hpsc-logo.png";
import NGPSALogo from "../../assets/images/logos/ngpsa-logo.png"
import classes from "./Header.module.scss";

export const Header = (): ReactElement => {
    return (
        <Container fluid className={classes.Header}>
            <Row className={classes.HeaderInner}>
                <Col xs={{span: 6}} md={{span: 2}} className={classes.HeaderLogo}>
                    <Link to="/">
                        <Image src={HPSCLogo} alt="HPSC logo" className={classes.LeftLogo}/>
                    </Link>
                </Col>
                <Col xs={{span: 12, order: 'last'}} md={{span: 8}} className={classes.HeaderCenter}>
                    <HeaderContent title="Hartbeespoortdam Practical Shooting Club"/>
                </Col>
                <Col xs={{span: 6}} md={{span: 2, order: 'last'}} className={classes.HeaderLogo}>
                    <a href={ngpsaLogo} target="_blank">
                        <Image src={NGPSALogo} alt="NGPSA logo" className={classes.RightLogo}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
