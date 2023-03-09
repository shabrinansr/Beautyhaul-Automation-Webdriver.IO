import Page from "./page";

class LogoutPage extends Page {
    //selector
    get profileSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]')
    }
    get signOutSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/div[2]/div/ul/li[7]/a')
    }
    get userOutSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[1]/div')
    }

    //action
    async clickProfile() {
        await this.profileSelector.click()
    }
    async clickSignOut() {
        await this.signOutSelector.click()
    }
}

export default new LogoutPage()