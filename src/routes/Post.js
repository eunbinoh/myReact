import '../App.css';
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import Items from './Items.js';

function Post() {

  return (
    <div className="post-container">

      <div className="posts">
        <div className="posts-contents">
          <div className="posts-contents-header">
            <div> @Author </div>
            <span className="like-button"> 
              <img src="./assets/icon/like.png" alt=""/> 
            </span>
          </div> 
          <div className="posts-contents-box">
            <div>
              내용
            </div> 
          
            <div className="posts-img">
              <img src="" width="100%" />
            </div>

            <div className="posts-contents-items">
              <button> Item1
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
              <button> Item2
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
              <button> Item3
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
            </div>

          </div>
        </div>
      </div>

    </div> 
  )
}

export default Post;