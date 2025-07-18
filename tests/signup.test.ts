import test from "@playwright/test";
import { expect } from "@playwright/test";

import signupPage, { generateemail } from "../pages/SignupPage";
let registerPageUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/register"
let successPageUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=account/success"

test("test signup function", async ({page}) => {
    const email = generateemail()
    const signup = new signupPage(page)
    await page.goto(registerPageUrl)
    await expect(page).toHaveURL(registerPageUrl)
    await expect(page).toHaveTitle("Register Account")
    await signup.enterFirstName("TestQA")
    await signup.enterLastName("BestQA")
    await signup.enterEmail(email)
    await signup.enterTelephone("+447909789038")
    await signup.enterPassword("pass123")
    await signup.confirmPassword("pass123")
    await signup.tickPrivacyBox()
    await signup.clickContinueBtn()
    await expect(page).toHaveURL(successPageUrl)
    await expect(page).toHaveTitle("Your Account Has Been Created!")

    
})