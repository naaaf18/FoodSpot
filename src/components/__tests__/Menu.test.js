import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import Store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import Body from '../Body'
import {ResMenu}  from '../../mocks/menu'
import '@testing-library/jest-dom'
import RestaurantMenu from '../RestaurantMenu'
import Header from '../Header'
import HeaderComponent from '../Header'

global.fetch =jest.fn(()=>{
   return Promise.resolve({
        json:()=>{
            return Promise.resolve(ResMenu)}
    })
})
test("search button is working ", async()=>{
  
    const body = render(<StaticRouter><Provider store={Store}><RestaurantMenu/><HeaderComponent/></Provider></StaticRouter>)
 
     await waitFor(()=>expect(body.getByTestId("menu1")));
     
     const addbtn = body.getAllByTestId("addbtn")
     fireEvent.click(addbtn[0])
     const cart = body.getByTestId('cart')
     expect(cart.innerHTML).toBe('Cart-1')

})