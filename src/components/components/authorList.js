import React from "react";

const authors = [
  { name: "Aaru", image: "./img/author/sophon/1.png", price: 3.2 },
  { name: "Franklin", image: "./img/author/sophon/2.png", price: 2.8 },
  { name: "Jennie", image: "./img/author/sophon/3.png", price: 4.5 },
  { name: "AB", image: "./img/author/sophon/4.png", price: 2.5 },
  { name: "FeynmanFan", image: "./img/author/sophon/5.png", price: 1.9 },
  { name: "Carl", image: "./img/author/sophon/6.png", price: 3.1 },
  { name: "Chrome", image: "./img/author/sophon/7.png", price: 5.1 },
  { name: "Beyondmetis", image: "./img/author/sophon/8.png", price: 2.1 },
  { name: "Cryptographer87", image: "./img/author/sophon/9.png", price: 2.6 },
  { name: "KVOTHED", image: "./img/author/sophon/10.png", price: 3.4 },
  { name: "Lewdlily", image: "./img/author/sophon/11.png", price: 4.4 },
  { name: "Lilibethmoi", image: "./img/author/sophon/12.png", price: 3.0 },
];

const authorlist = () => (
  <div>
    <ol className="author_list">
      {authors.map((author, index) => (
        <li key={index}>
          <div className="author_list_pp">
            <span onClick={() => window.open("", "_self")}>
              <img className="lazy" src={author.image} alt="" />
              <i className="fa fa-check"></i>
            </span>
          </div>
          <div className="author_list_info">
            <span onClick={() => window.open("", "_self")}>{author.name}</span>
            <span className="bot">{author.price} ETH</span>
          </div>
        </li>
      ))}
    </ol>
  </div>
);
export default authorlist;
