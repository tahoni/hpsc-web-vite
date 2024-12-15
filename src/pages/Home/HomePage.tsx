import {ReactElement} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {ImageWithSourceAndDescription} from "@tahoni/tahoni-lib-react";
import {ImageSidebar} from "../../components";
import leftShooter
    from "../../assets/images/pictures/shooter-left-transparent.png";
import rightShooter
    from "../../assets/images/pictures/shooter-right-transparent.png";

export const HomePage = (): ReactElement => {
    return (
        <Container fluid>
            <Row>
            <Col sm={2}>
                <ImageSidebar source={new ImageWithSourceAndDescription(leftShooter, "")}/>
            </Col>
            <Col>
            <Row>
                <Col>
                    <p>
                        The founding of the Hartbeespoortdam Practical Shooting Club
                        was a dream come true for a group of young and energetic
                        shooting enthusiasts from the Hartbeespoort area.
                        Prior to the forming of the club, members were mainly
                        shooting under the colors of both Premier and Akasia
                        Shooting Clubs.
                    </p>
                    <p>
                        Most of the founder members stay in Hartbeespoort, an active
                        community which had been without a practical pistol club for
                        many years.
                        Premier Club was a day’s travel by horse, and Akasia closed
                        its doors.
                    </p>
                    <p>
                        The club was founded in 2003, without a designated shooting
                        range.
                        The range at NECSA, Pelindaba was used in the beginning, but
                        it was soon realized that this range was unsuitable for
                        practical pistol shooting.
                        Further negotiations resulted in an agreement whereby the
                        Hartbeespoortdam club could use the Pretoria Defense
                        Practical Shooting Club Range at Eeufees road, and this
                        range is still used both for practice and competitions.
                    </p>
                    <p>
                        It will always be a dream of most members to have a shooting
                        range in Hartbeespoort…
                    </p>
                    <p>
                        We compete under International Practical Shooting
                        Confederation (IPSC) rules, and encourage members to
                        participate in 3 Gun competitions.
                        Shooting is scheduled as per a pre arranged calendar that
                        can be found on this website.
                    </p>
                    <p>
                        We are fully accredited with North Gauteng Practical
                        Shooting (NGPSA) and South African Practical Shooting
                        (SAPSA) Associations.
                    </p>
                    <p>
                        If you consider joining us, prepare to have FUN in a safe
                        environment.
                    </p>
                </Col>
            </Row>
            </Col>
            <Col sm={2}>
            <ImageSidebar source={new ImageWithSourceAndDescription(rightShooter, "")}/>
            </Col>
            </Row>
        </Container>
    )
}
