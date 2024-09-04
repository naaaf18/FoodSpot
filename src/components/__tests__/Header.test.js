import Header from '../Header'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import Store from '../../utils/store'
import { StaticRouter } from 'react-router-dom/server'

test("if the logo is getting loaded",()=>{

    const header = render(<StaticRouter><Provider store={Store}><Header/></Provider></StaticRouter>)
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("https://fpimages.withfloats.com/tile/632972807f42460001be357d.png")

})
test("if the user in online when the header is rendered",()=>{

    const header = render(<StaticRouter><Provider store={Store}><Header/></Provider></StaticRouter>)
    const online = header.getByTestId("onlinestatus");
    expect(online.innerHTML).toBe("💚")

})
test("if the cart is alive when header is rendered",()=>{

    const header = render(<StaticRouter><Provider store={Store}><Header/></Provider></StaticRouter>)
    const cart = header.getByTestId("cart");
    expect(cart.innerHTML).toBe("Cart-0")

})

