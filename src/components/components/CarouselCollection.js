import React, { Component } from "react";
import { navigate } from "@reach/router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { collections } from "../../constants/collections";
import { authors } from "../../constants/authors";

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
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 1600,
          settings: {
            slidesToShow: 4,
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
      <div className="nft">
        <Slider {...settings}>
          {collections.map((collection, index) => {
            const author = authors.find(
              (_author) => _author.id === collection.author
            );
            return (
              <CustomSlide key={index} className="itm" index={collection.id}>
                <div className="nft_coll">
                  <div className="nft_wrap">
                    <span>
                      <img
                        src={collection.previewImg}
                        className="lazy img-fluid"
                        alt=""
                      />
                    </span>
                  </div>
                  <div className="nft_coll_pp">
                    <span onClick={() => navigate(collection.nftLink)}>
                      <img className="lazy" src={author.image} alt="" />
                    </span>
                    <i className="fa fa-check"></i>
                  </div>
                  <div className="nft_coll_info">
                    <span
                      className="nft_coll_title"
                      onClick={() => navigate(collection.nftLink)}
                    >
                      <h4>{collection.title}</h4>
                      <span className="lines"></span>
                    </span>
                    <span>ERC-42</span>
                  </div>
                </div>
              </CustomSlide>
            );
          })}
        </Slider>
      </div>
    );
  }
}
