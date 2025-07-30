import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { createContext, useState, useEffect } from 'react';
import item from '../data/item'
import axios from 'axios';
import '../assets/style/style.scss';

export let Context1 = createContext<any>(undefined)

function Mine(): JSX.Element {
  let [items, setItems] = useState<any[]>(item);
  let [tab, setTab] = useState<string>('item');

  const handleTab = (tabType: string) => {
    setTab(tabType);
  };

  return (
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="filter-buttons">
            <button className={tab === 'item' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleTab('item')}>MY ITEM</button>
            <button className={tab === 'post' ? 'filter-btn active' : 'filter-btn'} onClick={() => handleTab('post')}>MY POST</button>
          </div>
        </div>
        <div className="item-box">
          <div className="row">
            {items.map((item, i) => {
              if (i === 0) {
                return (
                  <div className="item-card add-button" onClick={() => {}}>+</div>
                );
              } else {
                return (
                  <Card item={item} key={i} i={i + 1}></Card>
                );
              }
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