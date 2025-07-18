import { Page, selectors } from "@playwright/test";


    export function generateemail() {
        const timestamp = Date.now();
        return `qa_user_${timestamp}@mailer.com`  
    }

export default class signupPage{

    constructor(public page: Page){

    }
     
    async enterFirstName(firstname: string){
        await this.page.getByPlaceholder("First Name").fill(firstname)
    }
    async enterLastName(lastname: string){
        await this.page.getByPlaceholder("Last Name").fill(lastname)
    }

    async enterEmail(email: string){
        await this.page.getByPlaceholder("E-Mail").fill(email)

    }
    async enterTelephone(phone: string){
        await this.page.getByPlaceholder("Telephone").fill(phone)

    }
    async enterPassword(password: string){
        await this.page.locator("input[name = 'password']").fill(password)

    }
    async confirmPassword(passowrd: string){
        await this.page.locator("input[name = 'confirm']").fill(passowrd)
    }
    async tickPrivacyBox(){
        await this.page.locator("#content > form > div > div > div > label").check()

    }

    async clickContinueBtn(){ 
        await this.page.locator("input[type = 'submit']").click()

    }

    

}
