import LoginPage from "../pageobjects/login.page";

describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        //await browser.maximizeWindow()
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

        await expect(LoginPage.signInSuccessSelector).toHaveTextContaining('WELCOME BACK')
        await browser.pause(1000)
    
    })
})