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
            <div> * master1 </div>
            <div className="like-button">
                <span>20</span>
                <button></button>
            </div>
          </div> 
          <div className="posts-contents-box">
            <div className="posts-img">
              <img src="" width="100%" />
              <button> #Item
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
            </div>
            <div className="posts-context"> 내용 </div> 
          </div>
        </div>
      </div>

      <div className="posts">
        <div className="posts-contents">
          <div className="posts-contents-header">
            <div> * master2 </div>
            <div className="like-button">
                <span>20</span>
                <button></button>
            </div>
          </div> 
          <div className="posts-contents-box">
            <div className="posts-img">
              <img src="" width="100%" />
              <button> #Item
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
            </div>
            <div className="posts-context"> 내용 </div> 
          </div>
        </div>
      </div>
      
      <div className="posts">
        <div className="posts-contents">
          <div className="posts-contents-header">
            <div> * master3 </div>
            <div className="like-button">
                <span>20</span>
                <button></button>
            </div>
          </div> 
          <div className="posts-contents-box">
            <div className="posts-img">
              <img src="" width="100%" />
              <button> #Item
                <Routes >
                  <Route path="/items" element={ <Items /> } />
                </Routes>
              </button> 
            </div>
            <div className="posts-context"> 내용 </div> 
          </div>
        </div>
      </div>

    </div> 
  )
}

export default Post;