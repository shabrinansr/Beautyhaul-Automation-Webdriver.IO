import LoginPage from "../pageobjects/login.page";
import LogoutPage from "../pageobjects/logout.page";

//login //order
describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
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

//logout
        await LogoutPage.clickProfile()
        await LogoutPage.clickSignOut()
        await expect(LogoutPage.userOutSelector).toHaveTextContaining('MY ACCOUNT')
        await browser.pause(1000)
    
    })
})


