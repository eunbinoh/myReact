import '../assets/style/App.css';
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useContext, useTransition } from "react";
import item from './../data/item';
import hopes from './../data/hopes';
import { Nav} from "react-bootstrap"

function Detail(): JSX.Element {
  const location = useLocation();
  const [item, setItem] = useState<any>(location.state?.item)
  const [hope, setHopes] = useState<any[]>( hopes.filter((h: any) => {return h.itemId == item.itemId }) )



  
  return (
    <div className="detail-container">
        <div className="row">
          <div className="col-md-6">
            <img src={item.itemImg} alt="" width="100%" height="500px"/>
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

        <div className="hopes-container">  
          <div className="hopes">
            { hope.map((x: any,i: number)=>{
                return (
                  <div className='row'>
                    <span className='hoper'>  {x.hoper} </span>
                    <span className='content'> {x.context} </span>
                    <span className='wDate'> ( {x.writeDate.toDateString()} ) </span>
                    <span className='state'>
                      { x.status === '10' ? <img width="18px;" height="20px" src="../assets/icon/hope.svg" />
                        : x.status === '30' ?<img width="18px;" height="20px" src="../assets/icon/time.svg" />
                        : x.status === '40' ?<img width="18px;" height="20px" src="../assets/icon/trade.svg" />
                        : <></>
                      }
                    </span>
                  </div>
                    // <span className='visible'> {x.visibleYn.toString()} </span>
                )
              })
            }
          </div>
        </div>
        
    </div> 
  )
}



export default Detail;