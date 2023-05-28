import markaspaidPage from "../pageobjects/markaspaid.page";

// Login Admin Panel
describe('beautyhaul admin panel', () => {
    it('Mark as paid', async () => {
        await browser.url('https://www.playbybeautyhaul.com/admin/login')
        // isi username
        await markaspaidPage.clickEmail()
        await markaspaidPage.inputEmail('shabeautyhaul@gmail.com')
        // isi password
        await markaspaidPage.clickPass()
        await markaspaidPage.inputPass('beautyhaul')
        // klik button login
        await markaspaidPage.signInButton()
        await browser.pause(2000)
    })
})
//Mark as paid order