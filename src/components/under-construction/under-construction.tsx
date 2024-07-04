import {Col, Container, Image, Row} from "react-bootstrap";
import underConstructionImage from './under-construction.png';
import classes from "./under-construction.module.scss";

export const UnderConstruction = () => {
    return (
        <Container fluid={true}>
            <Row className="d-flex align-items-center justify-content-center">
                <Col className="d-flex align-items-center justify-content-center">
                    <Image className={classes.UnderConstructionImage} fluid={true}
                           src={underConstructionImage}
                           alt="Lady shooter on IPSC range"/>
                </Col>
            </Row>
        </Container>
    )
}
