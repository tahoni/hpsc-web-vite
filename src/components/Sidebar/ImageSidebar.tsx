import {ReactElement} from "react";
import {Col, Container, Image, Row} from "react-bootstrap";
import {ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";
import {imageConstants} from "../../constants/ImageConstants.ts";
import classes from "./ImageSidebar.module.scss";

interface SidebarProps {
    source: string;
}

export const ImageSidebar = (props: SidebarProps): ReactElement => {
    const imageSource: ImageWithSourceAndDescription | undefined = imageConstants.get(props.source);

    return (
        <Container fluid className={classes.Sidebar}>
            <Row className={classes.SidebarInner}>
                <Col className={classes.SidebarImage}>
                    <Image src={imageSource?.image} alt={imageSource?.description}/>
                </Col>
            </Row>
        </Container>
    )
}
