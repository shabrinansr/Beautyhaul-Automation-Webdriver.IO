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

    // Action
    async clickSignIn() {
        await this.signInSelector.click()
    }
    async inputEmail() {
        await this.inputEmailSelector.setValue()
    }
    async inputPass() {
        await this.inputPassSelector.setValue()
    }
    async signInButton() {
        await this.signInButtonSelector.click()
    }
}

export default new LoginPage()