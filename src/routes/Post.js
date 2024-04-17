import '../assets/style/App.css';
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import Items from './Items.js';
import post from '../data/post.js'

function Post() {
  const [posts, setPosts] = useState(post);

  return (
    <div className="post-container">
    {
      posts.map((p) => {
        return(
          <div className="posts">
            <div className="posts-contents">
              <div className="posts-contents-header">
                <div>@ {p.author} </div>
                <div className="like-button">
                    <img width="18px;" height="18px" src="../assets/icon/like-post.svg" /> 
                    <span>{p.likeCnt}</span>
                </div>
              </div> 
              <div className="posts-contents-box">
                <div className="posts-img">
                    { p.imgFile === '' ?
                      <img width="100%;" height="50%;" className="no-Image" src="../assets/icon/photo.svg" /> 
                      : <img width="95%;" height="100%;" src={ p.imgFile } /> 
                    }
                  <button> #Item
                    <Routes >
                      <Route path="/items" element={ <Items /> } />
                    </Routes>
                  </button> 
                </div>
                <div className="posts-context"> 
                   {p.context}
                   <br/>
                </div> 
              </div>
            </div>
          </div>
        )
      })
    }
    
    </div> 
  )
}

export default Post;