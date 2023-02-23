import Page from "./page";

class LoginPage extends Page {
    //selector
    get signInSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/a[1]')
    }

    // Action
    async clickSignIn() {
        await this.signInSelector.click()
    }
}

export default new LoginPage()