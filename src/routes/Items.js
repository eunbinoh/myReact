import '../assets/style/App.css';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect } from 'react';
import items from '../data/items.js'
import axios from 'axios';

export let Context1 = createContext()

function Items() {
  let [shoes, setShoes] = useState(items);
  axios.get('https://codingapple1.github.io/shop/data2.json' )
  .then((res) => {
      let clipShoes = [...shoes];
      res.data.forEach(data => {
        if(clipShoes.length < 7){
          clipShoes.push(data);
          setShoes(clipShoes);
        }
      });
  })
  .catch(()=>{
      console.log('axios fail')
  })

  return (
    <div className="item-container">
      <div className="filter-box">
        <label>CATEGORY </label>
        <select name="aa" id="" className="selectbox" >
          <option>의류/패션잡화</option>
          <option>디지털/기기</option>
          <option>화장품/미용</option>
          <option>가구/인테리어</option>
          <option>식물/화분</option>
          <option>출산/육아용품</option>
          <option>스포츠/레저</option>
          <option>생활/취미</option>
          <option>티켓/쿠폰</option>
        </select>
        <input placeholder=" 아이템명 / 소유자명으로 검색 가능 합니다"></input>
        <div className="find-icon"><button></button></div>
        <button>NEW ▽</button>
        <button>NAME ▽</button>
        <button>POPULAR ▽</button>
      </div>
      <div className="item-list">
        <div className="row">
          { shoes.map((shoe, i) => {
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
  console.log(props)
  let navigate = useNavigate();
  return (
      <>
        <div className="item-card col-md-4" onClick={()=>{ navigate(`/detail/${props.i}`)}} >
          <img 
            src={`https://codingapple1.github.io/shop/shoes${props.i}.jpg`} 
            width="80%" 
          />
          <h4>{props.shoe.title}</h4>
          <p>{props.shoe.content}</p>
          <p>${props.shoe.price} </p>
        </div>
      </>
  ) 
}

export default Items;