import Page from "./page";

class OrderPage extends Page {
//selector
    get shopByCategoriesSelector() {
        return $('/html/body/header/div[4]/div/div/div[1]/ul/li[3]/a')
    } 
    get makeupSectionSelector() {
        return $('/html/body/header/div[4]/div/div/div[1]/ul/li[3]/div/div/div/ul/li[1]/a')
    }
    get foundationSectionSelector() {
        return $('/html/body/header/div[4]/div/div/div[1]/ul/li[3]/div/div/div/ul/li[1]/div/div/div[1]/ul/li/ul/li[1]/a')
    }
    get productSelector() {
        //ERHA FOUNDATION
        return $('/html/body/div[2]/div/div/div[2]/div[2]/div[4]/a/div[1]/picture/img')
    }
    get addToCartSelector() {
        return $('//*[@id="btn-add-to-cart"]')
    }
    get cartIconSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[2]/ul/li[4]/a/span/div')
    }
    get checkoutSelector() {
        return $('//*[@id="btn-checkout"]')
    }
    get scrollIntoViewSelector() {
        //view ke delivery
        return $('//*[@id="form-delivery"]/div[2]/div[2]/div[1]/div/div/div[1]')
    }
    get deleverySelector() {
        return $('//*[@id="form-delivery"]/div[2]/div[2]/div[1]/div/div/div[1]')
    }
    get deleveryCourierSelector() {
        //pilih kurir JNE
        return $('//*[@id="form-delivery"]/div[2]/div[2]/div[1]/div/div/div[2]/div[1]/div')
    }
    get paymentSelector() {
        //pilih VA BCA
        return $('//*[@id="form-shipping"]/div[3]/div/div[3]/div[2]/div[2]/div')
    }
    get nextButtonSelector() {
        return $('//*[@id="btn-submit-cart"]')
    }
    get completeOrderButtonSelector() {
        return $('//*[@id="btn-complete-order"]')
    }
    get orderIdSelector() {
        //Untuk expect
        return $('/html/body/div[1]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[1]')
    }
    get uniqueOrderId() {
        return $('/html/body/div[2]/div/div/div[2]/div[1]/div/div[2]/div/div[1]/div[2]')
    }

//action
    async clickShopByCategories() {
        await this.shopByCategoriesSelector.click()
    }
    async clickMakeUp() {
        await this.makeupSectionSelector.moveTo()
    }
    async clickFoundation() {
        await this.foundationSectionSelector.click()
    }
    async clickProduct() {
        await this.productSelector.click()
    }
    async addToCart() {
        await this.addToCartSelector.click()
    }
    async clickCartIcon() {
        await this.cartIconSelector.click()
    }
    async clickCheckOut() {
        await this.checkoutSelector.click()
    }
    async scrollIntoDelivery() {
        await this.scrollIntoViewSelector.scrollIntoView({ block: 'center', inline: 'center' })
    }
    async clickDelivery() {
        await this.deleverySelector.click()
    }
    async chooseDelivery() {
        await this.deleveryCourierSelector.click()
    }
    async choosePayment() {
        await this.paymentSelector.click()
    }
    async scrollIntoNextButton() {
        await this.nextButtonSelector.scrollIntoView({ block: 'start', inline: 'center'})
    }
    async clickNextButton() {
        await this.nextButtonSelector.click()
    }
    async clickCompleteOrderButton() {
        await this.completeOrderButtonSelector.click()
    }
    async doubleClickOrderId() {
        await this.uniqueOrderId.doubleClick()
    }
}
export default new OrderPage()
