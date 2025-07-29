import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect } from 'react';
import item from '../data/item'
import axios from 'axios';

export let Context1 = createContext<any>(undefined)

function Mine(): JSX.Element {
  let [items, setItems] = useState<any[]>(item);

  return (
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="title">MY PAGE</div>
          <input placeholder=" 아이템명 검색"></input>
          <div className="find-icon"><img width="18px;" height="20px" src="../assets/icon/search.svg" /></div>
          <button>ALL</button>
          <button>HIDDEN</button>
          <button>LIKE</button>
          <button>HISTORY</button>
        </div>
        <div className="item-box">
          <div className="row">
            { items.map((item, i) => {
                return ( 
                  <Card item={item} key={i} i={i+1} ></Card> 
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

/** Card Component */
function Card(props: any): JSX.Element {
  let navigate = useNavigate();
  return (
      <>
        <div className="item-card col-md-4" 
             onClick={()=>{ navigate(`/detail/${props.item.itemId}`,{state: { item : props.item }} )}} >
          <div>
            <img src={props.item.itemImg} alt="" width="200px;" height="200px;" />
          </div>
          <div>
            <span className='card-title'>{props.item.itemNm}</span>
            <span>🤍{props.item.liker.length} </span>
            <span>❤ {props.item.buyHoper.length} </span>
          </div>
        </div>
      </>
  ) 
}

export default Mine;