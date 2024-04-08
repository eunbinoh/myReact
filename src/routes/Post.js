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
    
        {/* <img width="20px;" height="20px" src="../assets/icon/time.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/hope.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/trade.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/user.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/view.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/vip.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/water.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/gift.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/like-post.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/like.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/mail.svg" /> 
        <br/>

        <img width="20px;" height="20px" src="../assets/icon/cate-baby.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-beauty.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-cloth.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-digital.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-hobby.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-home.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-sports.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-ticket.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cate-tree.svg" /> 
        <br/>

        <img width="20px;" height="20px" src="../assets/icon/add.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/remove.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/delete.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/more.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/save.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/search.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/setting.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/alert.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/no-alert.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/notice.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/help.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/edit.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/filter.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/list.svg" /> 
        <br/>

        <img width="20px;" height="20px" src="../assets/icon/drop.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/fast.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/password.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/lock.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/unlock.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/fragile.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/money.svg" /> 

        <br/>
        <img width="20px;" height="20px" src="../assets/icon/photo.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/nice.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/sad.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/sun.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cloud.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/cherry.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/duck.svg" /> 
        <img width="20px;" height="20px" src="../assets/icon/flower.svg" />  */}

    </div> 
  )
}

export default Post;