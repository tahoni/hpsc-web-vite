import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Content} from "../Content/Content.tsx";
import {ImageSidebar} from "../../components";
import {BodyProps} from "../LayoutProps.ts";
import classes from "./Body.module.scss";

export const Body = (props: BodyProps): ReactElement => {
    return (
        <div className={classes.Body}>
            <div className={classes.BodyInner}>
                <div className={classes.BodySidebar}>
                    {props.leftSideImage ?
                        <ImageSidebar source={props.leftSideImage}/>
                        :
                        <></>
                    }
                </div>
                <div className={classes.BodyCenter}>
                    <Container>
                        <Row>
                            <Col>
                                <Content/>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className={classes.BodySidebar}>
                    {props.rightSideImage ?
                        <ImageSidebar source={props.rightSideImage}/>
                        :
                        <></>
                    }
                </div>
            </div>
        </div>
    )
}
