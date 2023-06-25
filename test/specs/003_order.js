import LoginPage from "../pageobjects/login.page";
import OrderPage from "../pageobjects/order.page";
import { Key } from 'webdriverio'
import markaspaidPage from "../pageobjects/markaspaid.page";

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
        
        // mark as paid
        await OrderPage.doubleClickOrderId()
        await browser.keys([Key.Command, 'c'])
        await browser.newWindow('https://www.playbybeautyhaul.com/admin')
        await markaspaidPage.clickEmail()
        await markaspaidPage.inputEmail('shabeautyhaul@gmail.com')
        // isi password
        await markaspaidPage.clickPass()
        await markaspaidPage.inputPass('beautyhaul')
        // klik button login
        await markaspaidPage.signInButton()
        await markaspaidPage.clickSearch()
        await browser.keys([Key.Command, 'v'])
        await markaspaidPage.clickOrderId()
        await markaspaidPage.markAsPaid()
        await markaspaidPage.clickPaymentName()
        await markaspaidPage.inputPaymentName('shabrina')
        await markaspaidPage.clickPaymentAmount()
        await markaspaidPage.inputPaymentAmount(200000)
        await markaspaidPage.clickPaymentDate()
        await markaspaidPage.chooseCalendar()
        await markaspaidPage.clickSubmitPayment()
        // step 2: buka tab baru
        // step 3: buka admin panel
        // step 4: isi username
        // step 5: isi password
        // step 6: klik button login
        // step 7: go to url (https://www.playbybeautyhaul.com/admin/store/orders/detail/{order_id})
        // await expect(OrderPage.orderIdSelector).toHaveTextContaining('ORDER ID')
        await browser.pause(3000)
    })
})