import '../assets/style/App.css';
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import item from './../data/item.js'
import hopes from './../data/hopes.js'
import { Nav} from "react-bootstrap"

function Detail() {
  const location = useLocation();
  let [item, setItem] = useState(location.state?.item)

  let [tab, setTab] = useState(0)
  return (
    <div className="detail-container">
        <div className="row">
          <div className="col-md-6">
            <img src={item.itemImg} alter="" width="100%" height="500px"/>
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{item.itemNm} </h4>
            <p> 등록자ID : {item.owner}</p>
            <p> 등록일자 : {item.itemDesc}</p>
            <p> 상세설명 : {item.itemDesc}</p>
            <p> 좋아요 수 : {item.liker?.length}</p>
            <p> 댓글 수 : {item.buyHoper?.length}</p>

          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          {  item.buyHoper?.map((buyHoper, i) => {
              return(
                <Nav.Item>
                  <Nav.Link 
                    onClick={()=>{ setTab(i)
                      // ,setHopes(hopes.find( x =>{return x.itemId === item.itemId 
                      //                       && x.hoperId ===item.buyHoper[i]}) ) 
                    }}  
                    eventKey="link0"
                  >{buyHoper}</Nav.Link>
                </Nav.Item>
              )
            })
          }
        </Nav>
        <div className="detail-hope-tab">
          <TabContent item={item} tab={tab}/>
        </div>
        
    </div> 
  )
}

function TabContent({item, tab}){
  let [hope, setHopes] = useState(hopes.find( x => x.itemId === item.itemId 
                                 && x.hoperId ===item.buyHoper[tab]) )
  return ([ <div className="detail-hope-tab">{ hope?.content }</div> ])
}

export default Detail;