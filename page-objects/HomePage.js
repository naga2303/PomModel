
export class HomePage{
    
    constructor(page){
        this.page=page;
        this.searchBox = "//input[@name = 'q']";
        this.electronics = "//a[@aria-label = 'Electronics']";
        this.hoverElectronics = "//span[text()= 'Electronics']"
        this.fashion = "//div[@aria-label = 'Fashion']";
        this.appliances = "//span[text()='Appliances']";
    }
    async clickAndTypeSearchBox(item){
        await this.page.click(this.searchBox)
        await this.page.fill(this.searchBox,item)
    }
    async hoverElectronicsProducts(){
        await this.page.click(this.electronics);
        await this.page.waitForSelector(this.hoverElectronics);
        await this.page.hover(this.hoverElectronics);
    }
    async hoverFashionProducts(){
        await this.page.hover(this.fashion)
    }
    async hoverAppliancesProducts(){
        await this.page.hover(this.appliances)
    }
}
