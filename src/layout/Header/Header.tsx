import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {HeaderContent} from "./HeaderContent.tsx";
import {
    clubAbbreviation,
    clubName
} from "../../constants/about/ClubConstants.ts";
import {
    provincialAssociationAbbreviation,
    provincialAssociationWebsite
} from "../../constants/about/AssociationConstants.ts";
import ClubLogo from "../../assets/images/logos/hpsc-logo.png";
import ProvincialAssociationLogo from "../../assets/images/logos/ngpsa-logo.png"
import layoutClasses from "../Layout.module.scss";
import classes from "./Header.module.scss";

export const Header = (): ReactElement => {
    return (
        <Container fluid className={classes.Header}>
            <Row className={classes.HeaderInner}>
                <Col xs={{span: 6}} md={{span: 2}} className={layoutClasses.LogoContainer}>
                    <Link to="/">
                        <Image src={ClubLogo} alt={clubAbbreviation + ' logo'} className={`${layoutClasses.Logo} ${layoutClasses.LeftLogo}`}/>
                    </Link>
                </Col>
                <Col xs={{span: 12, order: 'last'}} md={{span: 8}} className={classes.HeaderCenter}>
                    <HeaderContent title={clubName}/>
                </Col>
                <Col xs={{span: 6}} md={{span: 2, order: 'last'}} className={layoutClasses.LogoContainer}>
                    <a href={provincialAssociationWebsite} target="_blank">
                        <Image src={ProvincialAssociationLogo} alt={provincialAssociationAbbreviation + ' logo'} className={`${layoutClasses.Logo} ${layoutClasses.RightLogo}`}/>
                    </a>
                </Col>
            </Row>
        </Container>
    )
}
