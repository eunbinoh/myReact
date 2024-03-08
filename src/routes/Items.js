import '../assets/style/App.css';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect } from 'react';
import item from '../data/item.js'
import SelectBox from '../components/SelectBox.js';

export let Context1 = createContext()

function Items() {
  let [items, setItems ] = useState(item);
  let props = { show : false}

  return (
    <div className="item-container">
      <div className="filter-box">
        <label>CATEGORY </label>
        <SelectBox props={props}></SelectBox>

        <input placeholder=" 아이템명 / 소유자명으로 검색"></input>
        <div className="find-icon"><button></button></div>
        <button>NEW ▽</button>
        <button>NAME ▽</button>
        <button>POPULAR ▽</button>
      </div>
      <div className="item-list">
        <div className="row">
          { items.map((shoe, i) => {
              return ( 
                <Card shoe={shoe} key={i} i={i+1} ></Card> 
              )
            })
          }
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
        <div className="item-card col-md-4" onClick={()=>{ navigate(`/detail/${props.shoe.itemId}`)}} >
          <img src={props.shoe.itemImg} alter="" width="200px;" height="200px;" />
          <h4>{props.shoe.itemNm}</h4>
          <h5>{props.shoe.owner} </h5>
          <p>{props.shoe.itemDesc}</p>
        </div>
      </>
  ) 
}

export default Items;