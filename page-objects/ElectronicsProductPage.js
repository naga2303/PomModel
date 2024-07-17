class ElectronicsProductPage{

    constructor(page){
        this.page = page;
        this.gaming = "//a[text()='Gaming']";
        this.games = "//a[text()='Games']";
        this.priceMin = "(//select[@class='Gn+jFg'])[1]";
        this.priceMax = "(//select[@class='Gn+jFg'])[2]";
        this.totalGameResults = "//div[@class='slAVV4']";
        
    }
    async hoverGaming(){
        await this.page.hover(this.gaming);
    }
    async clickGames(){
        await this.page.waitForSelector(this.games);
        await this.page.click(this.games);
    }
    async selectMin(value)
    {
        const selectMinOptions = await this.page.locator(this.priceMin);
        await selectMinOptions.selectOption(value);
    }
    async selectMax(value){
        const selectMaxOption = await this.page.locator(this.priceMax);
        await selectMaxOption.selectOption(value);
    }
    async findTotalGameResults(){
        let totalResult = await this.page.locator(this.totalGameResults).all()
        console.log(totalResult.length)
    }
     
}