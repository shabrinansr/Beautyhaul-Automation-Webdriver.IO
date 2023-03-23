import Page from "./page";

class LoginPage extends Page {
    //selector
    get signInSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]')
    }
    get inputEmailSelector() {
        return $('/html/body/div[2]/div/div/div[1]/form/div[2]/input')
    }
    get inputPassSelector() {
        return $('/html/body/div[2]/div/div/div[1]/form/div[3]/input')
    }
    get signInButtonSelector() {
        return $('/html/body/div[2]/div/div/div[1]/form/div[5]/button')
    }
    get signInSuccessSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/div[1]')
    }
    get dontallowSelector() {
        return $('//*[@id="moe-dontallow_button"]')
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
    async clickDontAllow(){
        await this.dontallowSelector.click()
    }
}

export default new LoginPage()