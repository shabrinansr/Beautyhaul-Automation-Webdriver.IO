import LoginPage from "../pageobjects/login.page";
import OrderPage from "../pageobjects/order.page";

//login
describe('Beautyhaul Indonesia', () => {
    it('Order', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.beautyhaul.com/')
        await browser.pause(3000)
        await LoginPage.clickCloseBanner()
        await browser.pause(2000)
        await LoginPage.clickSignIn()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
        await LoginPage.inputPass('Abcd1234')
        await LoginPage.signInButton()
        await browser.pause(3000)
        await LoginPage.clickCloseVerivication()
        await browser.pause(3000)

        //Order
        await browser.url('https://www.beautyhaul.com/product/detail/dolce-pro-face-palette')
        await browser.pause(2000)
        await OrderPage.addToCart()
        await browser.pause(2000)
        await OrderPage.clickCartIcon()
        await browser.pause(2000)
        await OrderPage.clickCheckOut()
        await OrderPage.scrollIntoDelivery()
        await OrderPage.clickDelivery()
        await OrderPage.chooseDelivery()
        //await OrderPage.choosePayment()
        await OrderPage.scrollIntoNextButton()
        await OrderPage.clickNextButton()
        await OrderPage.clickCompleteOrderButton()
        await expect(OrderPage.orderIdSelector).toHaveTextContaining('ORDER ID')

    })
})