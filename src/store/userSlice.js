import {createSlice} from '@reduxjs/toolkit'

let user = createSlice({
    name : 'user',
    initialState : {name: 'Kim', age: 20},
    reducers : {
    /** reducers = actions (함수) */
        changeName(state) {
            // return {name : state.name ==='Kim' ? 'User Kim' : state.name , age: state.age} 
            /**
             * 원칙적으로 윗줄처럼 객체 요소를 변경해줘야하는것이 맞지만,
             * Object/Array.attr = {} 이렇게 직접 변경 가능할수있는 것은,
             * immer.js 라이브러리가 다시 한번 윗줄과 같이 return { state } 해주기 때문.
             */
            state.name = 'User' // 
        }
    /** state 변경하는 함수들은 반드시 별도 export 해줘야함 ( export let { fxName } = state.actions ) */
    }
})

export let { changeName } = user.actions
export default user