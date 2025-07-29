import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import item from '../data/item'
import axios from 'axios';
import '../assets/style/style.css';

export let Context1 = createContext<any>(undefined)

function Mine(): JSX.Element {
  let [items, setItems] = useState<any[]>(item);

  return (
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="title">MY PAGE</div>
          <div className="search-container">
            <input placeholder="아이템명 검색" />
            <div className="find-icon">
              <img width="18px" height="20px" src="../assets/icon/search.svg" />
            </div>
          </div>
          <div className="filter-buttons">
            <button className="filter-btn active">ALL</button>
            <button className="filter-btn">HIDDEN</button>
            <button className="filter-btn">LIKE</button>
            <button className="filter-btn">HISTORY</button>
          </div>
        </div>
        <div className="item-box">
          <div className="row">
            {items.map((item, i) => {
              return (
                <Card item={item} key={i} i={i + 1}></Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

function Card(props: any): JSX.Element {
  let navigate = useNavigate();
  return (
    <div className="item-card"
      onClick={() => { navigate(`/detail/${props.item.itemId}`, { state: { item: props.item } }) }}>
      <div className="card-image">
        <img src={props.item.itemImg} alt="" />
      </div>
      <div className="card-content">
        <span className='card-title'>{props.item.itemNm}</span>
        <div className="card-stats">
          <span className="like-count">🤍{props.item.liker.length}</span>
          <span className="wish-count">❤ {props.item.buyHoper.length}</span>
        </div>
      </div>
    </div>
  )
}

export default Mine;