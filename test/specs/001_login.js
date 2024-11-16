import LoginPage from "../pageobjects/login.page";

describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        await browser.maximizeWindow()
        await browser.url('https://www.beautyhaul.com/')
        await browser.pause(3000)
        await LoginPage.clickCloseBanner()
        await browser.pause(2000)
        await LoginPage.clickSignIn()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
        await LoginPage.inputPass('Beautyhaul12')
        await LoginPage.signInButton()
        await browser.pause(3000)
        await LoginPage.clickCloseVerivication()
        await browser.pause(3000)

        await expect(LoginPage.signInSuccessSelector).toHaveTextContaining('WELCOME BACK')
        await browser.pause(1000)
    
    })
})