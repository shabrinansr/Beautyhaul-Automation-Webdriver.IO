import LoginPage from "../pageobjects/login.page";

describe('Beautyhaul Indonesia', () => {
    it('Sign In', async () => {
        await browse.url('https://www.playbybeautyhaul.com/')
        await LoginPage.clickSignIn(
        await browse.pause(1000)
        )
    })
})