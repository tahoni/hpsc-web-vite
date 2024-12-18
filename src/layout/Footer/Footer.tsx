import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ShootingRangeMap} from "../../components";
import classes from "./Footer.module.scss"

export const Footer = (): ReactElement => {
    return (
        <Container fluid className={classes.Footer}>
            <Row>
                <Col xs={{span: 12}} md={{span: 8, offset: 1}} className={classes.FooterMap}>
                    <ShootingRangeMap mapStyle={{width: classes['footerMapWidth'],
                        height: classes['footerMapHeight']}}/>
                </Col>
            </Row>
        </Container>
    )
}
