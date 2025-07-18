import { expect } from "@playwright/test";
import test from "@playwright/test";

import loginPage from "../pages/loginPage"
const loginUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
const myaccUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/account"

test("Test the login function", async({page}) => {
    const login = new loginPage(page)
    await page.goto(loginUrl)
    await expect(page).toHaveURL(loginUrl)
    await login.enteremail("chinweanerodev0@gmail.com")
    await login.enterpassword("pass123")
    await login.clicksignupbutton()
    await expect(page).toHaveTitle("My Account")
    await expect(page).toHaveURL(myaccUrl)

})