import '../assets/style/App.css';
import { Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import { Nav} from "react-bootstrap"
import { useDispatch } from 'react-redux';

function Detail(props) {
  console.log(props)
  let [tab, setTab] = useState(0)

  return (
    <div className="detail-container">
        <div className="row">
          <div className="col-md-6">
            <img src={props.itemImg} alter="" width="100%" />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.itemNm} </h4>
            <p> 등록자ID : {props.owner}</p>
            <p> 등록일자 : {props.itemDesc}</p>
            <p> 상세설명 : {props.itemDesc}</p>
            <p> 좋아요 수</p>
            <p> 댓글 수</p>

          </div>
        </div>

        <Nav variant="tabs" defaultActiveKey="link0">
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(0)}} eventKey="link0">버튼1</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(1)}} eventKey="link1">버튼2</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={()=>{ setTab(2)}} eventKey="link2">버튼3</Nav.Link>
          </Nav.Item>
        </Nav>
        <TabContent shoes={props.shoes} tab={tab}/>
        
    </div> 
  )
}

function TabContent({shoes, tab}){
  return [<div>{shoes[tab].title}</div>, <div>{shoes[tab].title}</div>, <div>{shoes[tab].title}</div>][tab]
}

export default Detail;