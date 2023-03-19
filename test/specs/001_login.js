import LoginPage from "../pageobjects/login.page";

describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        await browser.url('https://www.playbybeautyhaul.com/')
        await LoginPage.clickSignIn()
        await LoginPage.inputEmail('shabrina.shabrina@beautyhaul.com')
        await LoginPage.inputPass('beautyhaul')
        await LoginPage.signInButton()

        await expect(LoginPage.signInSuccessSelector).toHaveTextContaining('WELCOME BACK')
        await browser.pause(1000)
    
    })
})