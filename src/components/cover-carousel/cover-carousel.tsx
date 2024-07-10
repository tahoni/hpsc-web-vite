import Slider, {Settings} from "react-slick";
import {Container} from "react-bootstrap";
import {ImageUtils} from "../../utils/image-utils.ts";
import {UnderConstruction} from "../under-construction/under-construction.tsx";
import "./cover-carousel.scss";

export const CoverCarousel = () => {
    const settings: Settings = {
        accessibility: true,
        dots: true,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Container fluid id="slider-container">
            <Slider {...settings}>
                <div>
                    <UnderConstruction source={ImageUtils.underCoverLadyImage.source}
                                       description={ImageUtils.underCoverLadyImage.description}/>
                </div>
                <div>
                    <UnderConstruction source={ImageUtils.underCoverTargetImage.source}
                                       description={ImageUtils.underCoverTargetImage.description}/>
                </div>
            </Slider>
        </Container>
    );
}
