import React, {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {FooterContent} from "./FooterContent.tsx";
import {ipscWebsite, sapsaWebsite} from "../../constants/AppConstants.ts";
import SAPSALogo from "../../assets/images/logos/sapsa-logo.png";
import IPSCLogo from "../../assets/images/logos/ipsc-logo.png";
import layoutClasses from "../Layout.module.scss";
import classes from "./Footer.module.scss"

export const Footer = React.memo(
    (): ReactElement => {

    return (
        <Container fluid className={classes.Footer}>
            <Row className={classes.FooterInner}>
                <Col xs={{span: 6}} md={{span: 2}} className={layoutClasses.LogoContainer}>
                    <a href={sapsaWebsite} target="_blank">
                        <Image src={SAPSALogo} alt="SAPSA logo" className={`${layoutClasses.Logo} ${layoutClasses.LeftLogo}}`}/>
                    </a>
                </Col>
                <Col xs={{span: 12, order: 'last'}} md={{span: 8}} className={classes.FooterCenter}>
                    <FooterContent/>
                </Col>
                <Col xs={{span: 6}} md={{span: 2, order: 'last'}} className={layoutClasses.LogoContainer}>
                    <a href={ipscWebsite} target="_blank">
                        <Image src={IPSCLogo} alt="IPSC logo" className={`${layoutClasses.Logo} ${layoutClasses.RightLogo}`}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
})
