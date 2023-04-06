import LoginPage from "../pageobjects/login.page";
import OrderPage from "../pageobjects/order.page";

//login
describe('Beautyhaul Indonesia', () => {
    it('Order', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.playbybeautyhaul.com/')
        await browser.pause(3000)
        await LoginPage.clickDontAllow()
        await browser.pause(2000)
        await LoginPage.clickSignIn()
        await LoginPage.clickEmail()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
        await LoginPage.clickPass()
        await LoginPage.inputPass('beautyhaul')
        await LoginPage.signInButton()
        await browser.pause(1000)

//Order
        await OrderPage.clickShopByCategories()
        await OrderPage.clickMakeUp()
        await OrderPage.clickFoundation()
        await OrderPage.clickProduct()
        await OrderPage.addToCart()
        await OrderPage.clickCartIcon()
        await OrderPage.clickCheckOut()
        await OrderPage.scrollIntoDelivery()
        await OrderPage.clickDelivery()
        await OrderPage.chooseDelivery()
        await OrderPage.choosePayment()
        await OrderPage.scrollIntoNextButton()
        await OrderPage.clickNextButton()
        await OrderPage.clickCompleteOrderButton()

        await expect(OrderPage.orderIdSelector).toHaveTextContaining('ORDER ID')
        await browser.pause(3000)

    })
})