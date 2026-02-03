import { BookStorePage } from "../pages/BookStorePage";
import { LoginPage } from "../pages/LoginPage";

const { Given, When, Then } = require("@cucumber/cucumber");

const { chromium, expect } = require("@playwright/test");

Given("User navigates to the application", async function () {
  const loginPage = new LoginPage(this.page);
  const bookStorePage = new BookStorePage(this.page);
  await this.page.goto('/login');
});


