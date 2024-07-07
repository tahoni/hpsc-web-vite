import {Col, Container, Image, Row} from "react-bootstrap";
import classes from "./under-construction.module.scss";

export const UnderConstruction = (props: UnderConstructionProps) => {
    return (
        <Container fluid={true}>
            <Row className="d-flex align-items-center justify-content-center">
                <Col className="d-flex align-items-center justify-content-center">
                    <Image className={classes.UnderConstructionImage} fluid={true}
                           src={props.image}
                           alt={props.description}/>
                </Col>
            </Row>
        </Container>
    )
}

class UnderConstructionProps {
    image: string;
    description: string;

    constructor(image: string, description: string) {
        this.image = image;
        this.description = description;
    }
}
