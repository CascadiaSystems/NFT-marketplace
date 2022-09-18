import React from "react";
import { authors } from "../../constants/authors";

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
