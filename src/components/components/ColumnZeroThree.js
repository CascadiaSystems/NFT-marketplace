import React, { Component } from "react";
import styled from "styled-components";
import { navigate } from "@reach/router";
import { items } from "../../constants/items";
import Clock from "./Clock";
import { authors } from "../../constants/authors";

const Outer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 8px;
`;

export default class Responsive extends Component {
  dummyData = items;

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
        {this.state.nfts.map((nft, index) => {
          const author = authors.find((_author) => _author.id === nft.author);
          return (
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
                  <span onClick={() => navigate(nft.authorLink)}>
                    <img className="lazy" src={author.image} alt="" />
                    <i className="fa fa-check"></i>
                  </span>
                </div>
                <div
                  className="nft__item_wrap"
                  // style={{height: `${this.state.height}px`}}
                >
                  <Outer>
                    <span onClick={() => navigate(nft.authorLink)}>
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
      </div>
    );
  }
}
