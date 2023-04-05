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
        return $('/html/body/div[2]/div/div[2]/div[3]/div[2]/form/div[9]/div[2]/button')
    }
    get cartIconSelector() {
        return $('/html/body/header/div[2]/div[1]/div[1]/div[3]/div[2]/ul/li[4]/a/span')
    }
    get checkoutSelector() {
        return $('/html/body/div[2]/div/form/div[2]/div[2]/div/div[4]/div[1]/button')
    }

//action
    async clickShopByCategories() {
        await this.shopByCategoriesSelector.click()
    }
    async clickMakeUp() {
        await this.makeupSectionSelector.moveTo({x: 20,y: 20})
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
}
export default new OrderPage()
