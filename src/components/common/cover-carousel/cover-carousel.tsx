import {ReactElement} from "react";
import {Container} from "react-bootstrap";
import Slider, {Settings} from "react-slick";
import {ImageSourceDescription} from "../../../model/ImageSourceDescription.ts";
import {Cover} from "../cover/cover.tsx";
import "./cover-carousel.scss";

export const CoverCarousel = (props: CoverCarouselProps): ReactElement => {
    const settings: Settings = {
        accessibility: true,
        dots: true,
        arrows: true,
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
                {(props.slides.map((value: ImageSourceDescription, index: number) => {
                    return (
                        <Cover key={index} image={value.source}
                               description={value.description}
                               text={value.text ?? ''}/>
                    )
                }))}
            </Slider>
        </Container>
    );
}

interface CoverCarouselProps {
    slides: ImageSourceDescription[];
}
