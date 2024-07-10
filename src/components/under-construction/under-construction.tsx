import {Container} from "react-bootstrap";
import {Cover} from "../cover/cover.tsx";

export const UnderConstruction = (props: UnderConstructionProps) => {
    return (
        <Container fluid>
            <Cover image={props.source}
                   description={props.description}
                   text="Under Construction"/>
        </Container>
    )
}

class UnderConstructionProps {
    source: string;
    description: string;

    constructor(source: string, description: string) {
        this.source = source;
        this.description = description;
    }
}
