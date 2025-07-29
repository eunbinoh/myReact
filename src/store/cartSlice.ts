import { createSlice } from '@reduxjs/toolkit'

let stock = createSlice({
    name : 'stock',
    initialState : [
        {id : 0, name:'White and Black', stock : 12},
        {id : 1, name:'Grey Yordan', stock : 11},
        {id : 2, name:'Snikers', stock : 0},
    ] ,
    reducers : {
        /** 파라미터 변수 사용할땐 action.payload */
        allPlus(state, action) {
            state.forEach( x => {
                x.stock += action.payload
            })
        },
        plusStock(state, action) {
            // state.forEach(x=>{ if (x.id === action.payload.id) ++x.stock })
            let idx = state.findIndex(x => (x.id === action.payload.id))
            ++state[idx].stock
        },
        addCart(state, action){
            state.push(action.payload)
        }

    }
})

export let { allPlus, plusStock, addCart } = stock.actions
export default stock