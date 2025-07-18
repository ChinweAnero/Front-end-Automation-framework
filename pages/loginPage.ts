import { Page, selectors } from "@playwright/test";

selectors
 const Email = "input[name = 'email']"
 const password = "input[name = 'password']"
 const login = "#content > div > div:nth-child(2) > div > div > form > input"

export default class loginPage{
    constructor(public page: Page){

    }

    async enteremail(email: string){ 
         
        await this.page.locator(Email).fill(email)
    }

    async enterpassword(Password: string){
       
        await this.page.locator(password).fill(Password)
        
    }

    async clicksignupbutton(){
        await this.page.locator(login).click()
    }
}