import { configureStore } from '@reduxjs/toolkit'
import user from './store/userSlice'
import stock from './store/cartSlice'

/** 
 * createSlice = useState  
 * 
 *  state 하나 하나를 slice 라고 부름
 *  let AA = createSlice({}) 선언하고, 사용하기 위해서는 export 필수!
 *  export default configureStore({ reducer : { A : AA.reducer }})
 * */
// let user = createSlice({
//     name : 'user',
//     initialState : {name: 'Kim', age: 20},
//     reducers : {
//     /** reducers = actions (함수) */
//         changeName(state) {
//             // return {name : state.name ==='Kim' ? 'User Kim' : state.name , age: state.age} 
//             /**
//              * 원칙적으로 윗줄처럼 객체 요소를 변경해줘야하는것이 맞지만,
//              * Object/Array.attr = {} 이렇게 직접 변경 가능할수있는 것은,
//              * immer.js 라이브러리가 다시 한번 윗줄과 같이 return { state } 해주기 때문.
//              */
//             state.name = 'User' // 
//         }
//     /** state 변경하는 함수들은 반드시 별도 export 해줘야함 ( export let { fxName } = state.actions ) */
//     }
// })
// export let { changeName } = user.actions
/** export 함수들을 사용할때는 import 하고  dispatch( fxName() ) */

// let stock = createSlice({
//     name : 'stock',
//     initialState : [
//         {id : 0, name:'White and Black', stock : 12},
//         {id : 1, name:'Grey Yordan', stock : 11},
//         {id : 2, name:'Snikers', stock : 0},
//     ] ,
//     reducers : {
//         /** 파라미터 변수 사용할땐 action.payload */
//         plusStock(state, action) {
//             state.forEach( x => {
//                 x.stock += action.payload
//             })
//         },
//         addCart(state, action){
//             state.forEach(x=>{
//                 if (x.id === action.payload.id) ++x.stock 
//             })
//         }

//     }
// })
// export let { plusStock, addCart } = stock.actions


/** state 보관함 */
export default configureStore({
    reducer: {
        user : user.reducer,
        cart : stock.reducer
    }
})