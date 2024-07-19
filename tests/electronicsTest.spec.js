///@ts-check

import {test,expect} from '@playwright/test';
import {HomePage} from '../page-objects/HomePage';
import {ElectronicsProductPage} from '../page-objects/ElectronicsProductPage';
import {BASE_URL} from '../constants/appConstants';

test.describe("Electronics Page Testing",()=>{

    test("To click the first item in the Gaming page",async({page})=>{
        await page.goto(BASE_URL)

        const ELECTRONICS =new HomePage(page);
        await ELECTRONICS.hoverElectronicsProducts();

        const ELECTRONICSPRODUCT = new ElectronicsProductPage(page);
        await ELECTRONICSPRODUCT.hoverGaming();
        await ELECTRONICSPRODUCT.clickGames();
        await ELECTRONICSPRODUCT.findTotalGameResults();
        
        await ELECTRONICSPRODUCT.selectMin("100")
        await ELECTRONICSPRODUCT.selectMax("1500")
        await page.waitForTimeout(5000);
        await ELECTRONICSPRODUCT.findTotalGameResults();
        await ELECTRONICSPRODUCT.clickFirstProduct();
        
    })
})
