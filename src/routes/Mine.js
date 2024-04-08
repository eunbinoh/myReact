import '../assets/style/App.css';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect } from 'react';
import item from '../data/item.js'
import axios from 'axios';

export let Context1 = createContext()

function Mine() {
  let [items, setItems] = useState(item);
  axios.get('https://codingapple1.github.io/shop/data2.json' )
  .then((res) => {
      let clipitems = [...items];
      res.data.forEach(data => {
        if(clipitems.length < 7){
          clipitems.push(data);
          setItems(clipitems);
        }
      });
  })
  .catch(()=>{
      console.log('axios fail')
  })

  return (
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="title">MY PAGE</div>
          <input placeholder=" 아이템명 검색"></input>
          <div className="find-icon"><button></button></div>
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
function Card(props) {
  let navigate = useNavigate();
  return (
      <>
        <div className="item-card col-md-4" onClick={()=>{ navigate(`/detail/${props.item.itemId}`)}} >
          <div>
            <img src={props.item.itemImg} alter="" width="200px;" height="200px;" />
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