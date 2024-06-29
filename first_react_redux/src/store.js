import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import todoReducer from './todoSlice';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer
    }
})
export default store;