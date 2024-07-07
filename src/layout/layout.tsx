import {Container} from "react-bootstrap";
import {Outlet} from "react-router";

export const Layout = () => {
    return (
        <Container fluid>
            <Outlet/>
        </Container>
    )
}
