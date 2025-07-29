import { Route, Routes, useParams } from "react-router-dom";
import { useState, useEffect, useContext, useTransition } from "react";
import Items from './Items';
import post from '../data/post'
import '../assets/style/style.css';

function Post(): JSX.Element {
  const [posts, setPosts] = useState<any[]>(post);

  return (
    <div className="post-container">
      {posts.map((p: any) => {
        return (
          <div key={p.id} className="posts">
            <div className="posts-contents">
              <div className="posts-contents-header">
                <div className="author-name">@ {p.author}</div>
                <div className="like-button">
                  <img width="18" height="18" src="../assets/icon/like-post.svg" alt="좋아요" /> 
                  <span>{p.likeCnt}</span>
                </div>
              </div> 
              <div className="posts-contents-box">
                <div className="posts-img">
                  {p.imgFile === '' ?
                    <img width="100%" height="50%" className="no-Image" src="../assets/icon/photo.svg" alt="이미지 없음" /> 
                    : <img width="100%" height="100%" src={p.imgFile} alt="포스트 이미지" /> 
                  }
                  <button className="item-button"> 
                    #Item
                    <Routes>
                      <Route path="/items" element={<Items />} />
                    </Routes>
                  </button> 
                </div>
                <div className="posts-context"> 
                  <textarea readOnly value={p.context} />
                  <br/>
                </div> 
              </div>
            </div>
          </div>
        );
      })}
    </div> 
  )
}

export default Post;