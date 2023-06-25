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
    get markAsPaidSelector() {
        return $('//*[@id="page-content"]/div[2]/div[2]/form/div[2]/a[1]/button')
    }
    get paymentNameSelector() {
        return $('//*[@id="frmPay"]/div[3]/div[1]/div[3]/input')
    }
    get paymentAmountSelector() {
        return $('//*[@id="frmPay"]/div[3]/div[1]/div[4]/input')
    }
    get paymentDate() {
        return $('//*[@id="dp1687673198157"]')
    }
    get calendar() {
        return $('//*[@id="ui-datepicker-div"]/table/tbody/tr[4]/td[7]/a')
    }
    get submitPayment() {
        return $('//*[@id="frmPay"]/div[3]/div[2]/button[2]')
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
    async markAsPaid() {
        await this.markAsPaidSelector.click()
    }
    async clickPaymentName() {
        await this.paymentNameSelector.click()
    }
    async inputPaymentName() {
        await this.paymentNameSelector.setValue(shabrina)
    }
    async clickPaymentAmount() {
        await this.paymentAmountSelector.click()
    }
    async inputPaymentAmount() {
        await this.paymentAmountSelector.setValue(200000)
    }
    async clickPaymentDate() {
        await this.paymentDate.click()
    }
    async chooseCalendar() {
        await this.calendar.click()
    }
    async clickSubmitPayment() {
        await this.submitPayment.click()
    }
    //step 1: tambah selector username
    //step 2: tambah selector password
    //step 3: tambah selector button login
    //step 4: isi field username
    //step 5: isi field password
    //step 6: klik button login
}

export default new MarkaskpaidPage()