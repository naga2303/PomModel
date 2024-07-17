class HomePage{
    
    constructor(page){
        this.page=page;
        this.searchBox = "//input[@name = 'q']";
        this.electronics = "//div[@aria-label = 'Electronics']";
        this.fashion = "//div[@aria-label = 'Fashion']";
        this.appliances = "//span[text()='Appliances']";
    }
    async clickAndTypeSearchBox(item){
        await this.page.click(this.searchBox)
        await this.page.fill(this.searchBox,item)
    }
    async hoverElectronicsProducts(){
        await this.page.hover(this.electronics);
    }
    async hoverFashionProducts(){
        await this.page.hover(this.fashion)
    }
    async hoverAppliancesProducts(){
        await this.page.hover(this.appliances)
    }
}