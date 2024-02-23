import '../assets/style/App.css';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect } from 'react';
import items from '../data/items.js'
import axios from 'axios';

export let Context1 = createContext()

function Mine() {
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
    <div className="mine-container">
      <div className="container-left"></div>
      <div className="container-right">
        <div className="filter-box">
          <div className="title">MY PAGE</div>
          <input placeholder=" 아이템명 검색"></input>
          <div className="find-icon"><button></button></div>
          <button>거래목록</button>
          <button>찜목록</button>
          <button>ALL</button>
          <button>비공개템</button>
        </div>
        <div className="item-box">
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
    </div>
  )
}

/** Card Component */
function Card(props) {
  console.log(props)
  let navigate = useNavigate();
  return (
      <>
        <div className="col-md-4" onClick={()=>{ navigate(`/detail/${props.i}`)}} >
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

export default Mine;