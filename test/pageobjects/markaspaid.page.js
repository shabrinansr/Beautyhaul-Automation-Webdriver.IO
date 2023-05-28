import Page from "./page";

class MarkaskpaidPage extends Page {
    //selector
    get inputEmailSelector() {
        return $('//*[@id="frmLogin"]/div[2]/span/input')
    }
    get inputPassSelector() {
        return $('//*[@id="frmLogin"]/div[3]/span/input')
    }
    get signInButtonSelector() {
        return $('//*[@id="frmLogin"]/div[5]/input')
    }
    get searchSelector() {
        return $('//*[@id="data-order_filter"]/label/input')
    }
    get orderIdSelector() {
        return $('//*[@id="data-order"]/tbody/tr/td[2]/a')
    }
    //action
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
    async clickSearch() {
        await this.searchSelector.click()
    }
    async clickOrderId() {
        await this.orderIdSelector.click()
    }
    //step 1: tambah selector username
    //step 2: tambah selector password
    //step 3: tambah selector button login
    //step 4: isi field username
    //step 5: isi field password
    //step 6: klik button login
}

export default new MarkaskpaidPage()