import Page from "./page";

class LoginPage extends Page {
    //selector
    get signInSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]')
    }
    get inputEmailSelector() {
        return $('/html/body/div[1]/div/div/div[1]/form/div[2]/div[1]/input')
    }
    get inputPassSelector() {
        return $('/html/body/div[1]/div/div/div[1]/form/div[2]/div[2]/input')
    }
    get signInButtonSelector() {
        return $('/html/body/div[1]/div/div/div[1]/form/div[4]/button')
    }
    get signInSuccessSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]')
    }
    get closeBanner() {
        return $('//*[@id="popupwrapper"]/div/div')
    }
    get closePhoneVerivication() {
        return $('//*[@id="close-overlay"]')
    }

    // Action
    async clickSignIn() {
        await this.signInSelector.click()
    }
    async clickEmail() {
        await this.inputEmailSelector.click()
    }
    async inputEmail(email) {
        await this.inputEmailSelector.setValue(email)
    }
    async clickPass() {
        await this.inputPassSelector.click()
    }
    async inputPass(password) {
        await this.inputPassSelector.setValue(password)
    }
    async signInButton() {
        await this.signInButtonSelector.click()
    }
    async clickCloseBanner(){
        await this.closeBanner.click()
    }
    async clickCloseVerivication(){
        await this.closePhoneVerivication.click()
    }
}

export default new LoginPage()