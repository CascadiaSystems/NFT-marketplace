import React, { Component } from "react";
import Clock from "./Clock";
import { navigate } from "@reach/router";
import { createGlobalStyle } from "styled-components";
import { auctions } from "../../constants/auction";
import { authors } from "../../constants/authors";

const GlobalStyles = createGlobalStyle`
    .de_countdown{
        position: relative;
        box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.3);
        top: 0;
        left: 0;
        margin-bottom: 20px;
        div{
            display: flex;
            justify-content: center;
        }
        .Clock-days, .Clock-hours, .Clock-minutes{
            margin-right: 10px;
        }
    }
`;

export default class Responsive extends Component {
  dummyData = auctions;

  constructor(props) {
    super(props);
    this.state = {
      nfts: this.dummyData.slice(0, 8),
      height: 0,
    };
    this.onImgLoad = this.onImgLoad.bind(this);
  }

  loadMore = () => {
    let nftState = this.state.nfts;
    let start = nftState.length;
    let end = nftState.length + 4;
    this.setState({
      nfts: [...nftState, ...this.dummyData.slice(start, end)],
    });
  };

  onImgLoad({ target: img }) {
    let currentHeight = this.state.height;
    if (currentHeight < img.offsetHeight) {
      this.setState({
        height: img.offsetHeight,
      });
    }
  }

  onLike(id) {
    let nftState = this.state.nfts.map((nft) => {
      if (nft.id === id) {
        nft.likes++;
      }
      return nft;
    });
    this.setState({
      nfts: [...nftState],
    });
  }
  render() {
    return (
      <div className="row">
        <GlobalStyles />
        {this.state.nfts.map((nft, index) => {
          const author = authors.find((_author) => _author.id === nft.author);
          return (
            <div
              key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12 mb-4"
            >
              <div className="nft__item m-0">
                <div className="author_list_pp">
                  <span onClick={() => navigate(nft.authorLink)}>
                    <img className="lazy" src={author.image} alt="" />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div className="nft__item_wrap">
                  <span>
                    <img
                      onLoad={this.onImgLoad}
                      src={nft.previewImg}
                      className="lazy nft__item_preview"
                      alt=""
                    />
                  </span>
                </div>
                <div className="de_countdown">
                  <Clock deadline={nft.deadline} />
                </div>
                <div className="nft__item_info">
                  <span
                    className="nft_pic_title"
                    onClick={() => navigate(nft.nftLink)}
                  >
                    <h4>{nft.title}</h4>
                    <span className="lines"></span>
                  </span>
                  <div className="nft__item_price">
                    {nft.price}
                    <span>{nft.bid}</span>
                  </div>
                  <div className="nft__item_action">
                    <span>
                      <button onClick={() => window.open(nft.bidLink, "_self")}>
                        Place a bid
                      </button>
                    </span>
                  </div>
                  <div
                    className="nft__item_like"
                    onClick={() => this.onLike(nft.id)}
                  >
                    <i className="fa fa-heart"></i>
                    <span>{nft.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {this.state.nfts.length !== this.dummyData.length && (
          <div className="col-lg-12">
            <div className="spacer-single"></div>
            <span
              onClick={() => this.loadMore()}
              className="btn-main lead m-auto"
            >
              Load More
            </span>
          </div>
        )}
      </div>
    );
  }
}
