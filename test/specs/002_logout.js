import LoginPage from "../pageobjects/login.page";
import LogoutPage from "../pageobjects/logout.page";

//login
describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        await browser.url('https://www.playbybeautyhaul.com/')
        await LoginPage.clickSignIn()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
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


