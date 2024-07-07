import {Col, Container, Image, Row} from "react-bootstrap";
import classes from "./cover.module.scss";

export const Cover = (props: CoverProps) => {
    return (
        <Container fluid={true} className={classes.Cover}>
            <Row className="d-flex align-items-center justify-content-center">
                <Col className="d-flex align-items-center justify-content-center">
                    <Image fluid={true} src={props.image} alt={props.description}/>
                    <h1 className={classes.CoverText}>Under Construction</h1>
                </Col>
            </Row>
        </Container>
    )
}

class CoverProps {
    image: string;
    description: string;

    constructor(image: string, description: string) {
        this.image = image;
        this.description = description;
    }
}
