import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

    return (
      <div className="nft-big">
        <Slider {...settings}>
          <CustomSlide className="itm" index={1}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">Sophon #95623</span>
                  <span className="nft_pic_by">The Art of Sophons</span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/sophon/1.png"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={2}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">Sophon #86273</span>
                  <span className="nft_pic_by">The Art of Sophons</span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/sophon/2.png"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={3}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">Sophon #73374</span>
                  <span className="nft_pic_by">The Art of Sophons</span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/carousel/sophon/3.png"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={4}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">Sophon #99763</span>
                  <span className="nft_pic_by">The Art of Sophons</span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/items/sophon/4.png"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>

          <CustomSlide className="itm" index={5}>
            <div className="nft_pic">
              <span>
                <span className="nft_pic_info">
                  <span className="nft_pic_title">Sophon #89763</span>
                  <span className="nft_pic_by">The Art of Sophons</span>
                </span>
              </span>
              <div className="nft_pic_wrap">
                <img
                  src="./img/items/sophon/5.png"
                  className="lazy img-fluid"
                  alt=""
                />
              </div>
            </div>
          </CustomSlide>
        </Slider>
      </div>
    );
  }
}
