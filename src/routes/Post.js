import '../App.css';
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import Items from './Items.js';

function Post() {

  return (
    <div className="post-container">
      <div className="posts">
        <div className="posts-img">
          <img src ="" width="100%" />
        </div>
        <div className="posts-contents">
          <div className="posts-contents-header">
            <span> 날짜 </span>
            <span> 타이틀 </span>
            <span> 저자 </span>
            <span> LIKE </span>
          </div> 
          <div className="posts-contents-box">
            <div> 내용 </div>
            <button> 바로가기
              <Routes >
                <Route path="/items" element={ <Items /> } />
              </Routes>
            </button> 
          </div>
        </div>
      </div>
      <div className="posts">
        <div className="posts-img">
          <img src ="" width="100%" />
        </div>
        <div className="posts-contents">
          <div className="posts-contents-header">
            <span> 날짜 </span>
            <span> 타이틀 </span>
            <span> 저자 </span>
            <span> LIKE </span>
          </div> 
          <div className="posts-contents-box">
            <div> 내용 </div>
            <button> 바로가기
              <Routes >
                <Route path="/items" element={ <Items /> } />
              </Routes>
            </button> 
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Post;