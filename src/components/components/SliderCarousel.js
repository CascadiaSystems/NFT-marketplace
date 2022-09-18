import React, { Component } from "react";
import { navigate } from "@reach/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { slides } from "../../constants/slides";

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    return <div {...props}></div>;
  }
}

export default class Responsive extends Component {
  render() {
    var settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      adaptiveHeight: 300,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    };

    const handleLink = (link) => () => {
      navigate(link);
    };

    return (
      <div className="nft-big">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <CustomSlide className="itm" index={slide.id} key={index}>
              <div className="nft_pic">
                <span>
                  <span className="nft_pic_info">
                    <span
                      className="nft_pic_title"
                      onClick={handleLink(slide.nftLink)}
                    >
                      {slide.title}
                      <span className="lines"></span>
                    </span>
                    <span className="nft_pic_by">{slide.collection}</span>
                  </span>
                </span>
                <div className="nft_pic_wrap">
                  <img
                    src={slide.previewImg}
                    className="lazy img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </CustomSlide>
          ))}
        </Slider>
      </div>
    );
  }
}
