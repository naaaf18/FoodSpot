import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cartSlice'

const Store = configureStore({
    reducer:{
        cart:cartSlice
    }

})

export default Store


/**
 * 
 * create a store using 
 * 1.configure store from rtk
 * 2.Provider from react-redux
 * provider component to wrap all the app layout
 * 3.create cartSlice by create slice
 * added name,initialstate, reducers , actions
 * 4.exported cartSlice.reducer and const {addItem,...}=cartSlice.actions
 * 5.add the slice to the store
 *    {
 *     reducer:{
 *    "name of cart"(cart):cartSlice
 * }
 * }
 * 6.import  useSelector from react-redux to read the items in the slice and
 * update it in the store
 * 7.create a button for making an action
 * onclick {()=>handleAdditem}
 * handle add item include
 * dispatch 
 * addItem 
 * 
 * add dispatch from react-redux
 */