import { fireEvent, render, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import Store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'
import Body from '../Body'
import { RestaurantData } from '../../mocks/data'
import '@testing-library/jest-dom'
import HeaderComponent from '../Header'

global.fetch =jest.fn(()=>{
   return Promise.resolve({
        json:()=>{
            return Promise.resolve(RestaurantData)}
    })
})


test("if the logo is getting loaded",()=>{
  
    const body = render(<StaticRouter><Provider store={Store}><Body/></Provider></StaticRouter>)
    console.log(body)
})
test("shimmer is getting loaded",()=>{
  
    const body = render(<StaticRouter><Provider store={Store}><Body/></Provider></StaticRouter>)
    console.log(body)
     const shimmer= body.getByTestId("shimmer")
     expect(shimmer.children.length).toBe(10)
     console.log(shimmer)
})
test("body is getting loaded", async()=>{
  
    const body = render(<StaticRouter><Provider store={Store}><Body/></Provider></StaticRouter>)
    console.log(body)
     await waitFor(()=>expect(body.getByTestId("searchbtn")))
     const resList = body.getByTestId('reslist')
     expect(resList.children.length).toBe(9)
})
test("body is getting when searching loaded", async()=>{
  
    const body = render(<StaticRouter><Provider store={Store}><Body/></Provider></StaticRouter>)
    console.log(body)
     await waitFor(()=>expect(body.getByTestId("searchbtn")))
     const input = body.getByTestId('input')
     fireEvent.change(input,{
        target:{
            value:"pizza"
        }
     })
     fireEvent.click(body.getByTestId("searchbtn"))
     const resList = body.getByTestId('reslist')
     expect(resList.children.length).toBe(1)
})