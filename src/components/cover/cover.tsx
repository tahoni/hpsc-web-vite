import {Col, Container, Image, Row} from "react-bootstrap";
import classes from "./cover.module.scss";

export const Cover = (props: CoverProps) => {
    return (
        <Container fluid id="cover" className={classes.cover}>
            <Row className="d-flex h-100 align-items-center justify-content-center">
                <Col className="d-flex h-100 align-items-center justify-content-center">
                    <Image fluid src={props.image} alt={props.description}/>
                    <h1 className={classes.coverText}>{props.text}</h1>
                </Col>
            </Row>
        </Container>
    )
}

class CoverProps {
    image: string;
    description: string;
    text: string;

    constructor(image: string, description: string, text: string) {
        this.image = image;
        this.description = description;
        this.text = text;
    }
}
