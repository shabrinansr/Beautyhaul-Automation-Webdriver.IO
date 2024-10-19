import LoginPage from "../pageobjects/login.page";
import LogoutPage from "../pageobjects/logout.page";

//login
describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.beautyhaul.com/')
        await browser.pause(3000)
        await LoginPage.clickCloseBanner()
        await browser.pause(2000)
        await LoginPage.clickSignIn()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
        await LoginPage.inputPass('Sh4brin4#121199')
        await LoginPage.signInButton()
        await browser.pause(3000)
        await LoginPage.clickCloseVerivication()
        await browser.pause(3000)

//logout
        await LogoutPage.clickProfile()
        await LogoutPage.clickSignOut()
        await expect(LogoutPage.userOutSelector).toHaveTextContaining('MY ACCOUNT')
        await browser.pause(1000)
    
    })
})


