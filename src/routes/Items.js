import '../assets/style/App.css';
import { Routes, Route, useNavigate, useParams} from 'react-router-dom'
import { createContext,useState,useEffect, useMemo } from 'react';
import item from '../data/item.js'
import category from '../data/category.js'
import Select from 'react-select'
import { isVisible } from '@testing-library/user-event/dist/utils/index.js';

export let Context1 = createContext()

function Items() {
  let [items, setItems ] = useState(item);
  let [cates, setCates ] = useState(category)

  const selectStyles = {
    control: (styles) => ({ ...styles, 
      fontFamily: 'GangwonEdu_OTFBoldA',
      appearance: 'none',
      width: 200, 
      height: 20, 
      backgroundColor: 'rgba(242, 238, 238, 0.676)',
      fontSize: 14,
      border: 'none',
      borderRadius: 15,
      boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.25)',
      padding: '0px 0px 0px 0px',
    }),
    option: (styles) => ({ ...styles, 
      fontFamily: 'GangwonEdu_OTFBoldA',
      backgroundColor: 'rgba(242, 238, 238, 0.676)',
      cursor: 'pointer',
      lineHeight: '80%',
      fontSize: 13,
    }),
    singleValue: (styles) => ({ ...styles, 
      height: 20,
      paddingTop: 1
    })
  };

  return (
    <div className="item-container">
      <div className="filter-box">
        <span>CATEGORY </span>
        <Select
          defaultValue={cates[0]}
          name="cate"
          options={cates}
          styles={selectStyles}
          classNamePrefix="select"
          className="basic-single"
          isClearable={false}
          isSearchable={false}
        />
        <input placeholder=" 아이템명 / 소유자명으로 검색"></input>
        <div className="find-icon"><img width="18px;" height="20px" src="../assets/icon/search.svg" /></div>
        <button>NEW▽</button>
        <button>NAME▽</button>
        <button>POPULAR▽</button>
      </div>
      <div className="item-list">
        <div className="row">
          { items.map((x, i) => {
              return ( 
                <Card item = {x} key={i} i={i+1} ></Card> 
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
        <div className="item-card col-md-3" 
             onClick={()=>{ navigate(`/detail/${props.item.itemId}`, {state: { item : props.item }})}} >
          <img src={props.item.itemImg} alter="" width="200px;" height="200px;" />
          <h4>{props.item.itemNm}</h4>
          <div className='card-row2'>  
            <span>{props.item.owner} </span>
            <span>🤍{props.item.liker.length} </span>
            <span>❤ {props.item.buyHoper.length} </span>
          </div>
          <div className='card-row3'>
            <span> {
                      props.item.itemDesc.length < 19 ? props.item.itemDesc
                       : props.item.itemDesc.substring(0,19) + ' ..'
                    }
            </span>
          </div>
        </div>
      </>
  ) 
}

export default Items;