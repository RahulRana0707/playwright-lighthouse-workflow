// import { writeFileSync } from "fs";
// import { test, chromium, Page, expect } from "@playwright/test";
// import { startFlow, type Puppeteer } from "lighthouse";
// import { CDPSession } from "playwright-core"; // Access CDP Session from Playwright

// let page: Page;

// test.beforeAll(async () => {
//   const browser = await chromium.launch({ headless: true });
//   page = await browser.newPage();
//   await page.goto("http://localhost:3000");
// });

// test("Should write in input filed", async () => {
//   const client: CDPSession = await page.context().newCDPSession(page);
//   const flow = await startFlow(client as unknown as Puppeteer.Page);

//   flow.startTimespan();

//   const todoInput = page.getByTestId("todo-input");
//   const addButton = page.getByTestId("add-todo-btn");

//   await todoInput.fill("Buy groceries");
//   await addButton.click();

//   const todoItem = page.getByTestId("todo-item"); // Assuming 'todo-1' is the first item
//   await expect(todoItem).toContainText("Buy groceries");

//   flow.endTimespan();
//   writeFileSync("report.html", await flow.generateReport());
// });

// test.afterAll(async () => {
//   await page.close();
// });
