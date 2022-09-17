import React, { Component } from "react";
import styled from "styled-components";
import Clock from "./Clock";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

export default class Responsive extends Component {
  dummyData = [
    {
      deadline: "December, 30, 2021",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/1.png",
      previewImg: "./img/items/sophon/1.png",
      title: "Item #2563",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/10.png",
      previewImg: "./img/items/sophon/2.png",
      title: "Item #3637",
      price: "0.06 ETH",
      bid: "1/22",
      likes: 80,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/11.png",
      previewImg: "./img/items/sophon/3.png",
      title: "Item #5547",
      price: "0.05 ETH",
      bid: "1/11",
      likes: 97,
    },
    {
      deadline: "January, 1, 2022",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/12.png",
      previewImg: "./img/items/sophon/4.png",
      title: "Item #6815",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/9.png",
      previewImg: "./img/items/sophon/5.png",
      title: "Item #1652",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "January, 15, 2022",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/2.png",
      previewImg: "./img/items/sophon/6.png",
      title: "Item #8841",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/3.png",
      previewImg: "./img/items/sophon/7.png",
      title: "Item #5584",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/4.png",
      previewImg: "./img/items/sophon/8.png",
      title: "Sophon #99763",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "January, 3, 2022",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/5.png",
      previewImg: "./img/items/sophon/9.png",
      title: "Item #4881",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/7.png",
      previewImg: "./img/items/sophon/10.png",
      title: "item #0637",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/6.png",
      previewImg: "./img/items/sophon/11.png",
      title: "Item #7794",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "January, 10, 2022",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/8.png",
      previewImg: "./img/items/sophon/12.png",
      title: "Item #2694",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/9.png",
      previewImg: "./img/items/sophon/13.png",
      title: "Item #6949",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
    {
      deadline: "January, 10, 2022",
      authorLink: "#",
      nftLink: "#",
      bidLink: "#",
      authorImg: "./img/author/sophon/12.png",
      previewImg: "./img/items/sophon/14.png",
      title: "Sophon #89763",
      price: "0.08 ETH",
      bid: "1/20",
      likes: 50,
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      nfts: this.dummyData,
      height: 0,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  onImgLoad({ target: img }) {
    let currentHeight = this.state.height;
    if (currentHeight < img.offsetHeight) {
      this.setState({
        height: img.offsetHeight,
      });
    }
  }

  render() {
    return (
      <div className="row">
        {this.state.nfts.map((nft, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          >
            <div className="nft__item">
              {nft.deadline && (
                <div className="de_countdown">
                  <Clock deadline={nft.deadline} />
                </div>
              )}
              <div className="author_list_pp">
                <span onClick={() => window.open(nft.authorLink, "_self")}>
                  <img className="lazy" src={nft.authorImg} alt="" />
                  <i className="fa fa-check"></i>
                </span>
              </div>
              <div className="nft__item_wrap">
                <Outer>
                  <span>
                    <img
                      onLoad={this.onImgLoad}
                      src={nft.previewImg}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </span>
                </Outer>
              </div>
              <div className="nft__item_info">
                <span onClick={() => window.open(nft.nftLink, "_self")}>
                  <h4>{nft.title}</h4>
                </span>
                <div className="nft__item_price">
                  {nft.price}
                  <span>{nft.bid}</span>
                </div>
                <div className="nft__item_action">
                  <span onClick={() => window.open(nft.bidLink, "_self")}>
                    Place a bid
                  </span>
                </div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{nft.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
