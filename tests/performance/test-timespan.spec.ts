import { writeFileSync } from "fs";
import puppeteer from "puppeteer";
import { startFlow, desktopConfig } from "lighthouse";
import test from "@playwright/test";

// Playwright and Lighthouse integration using timespan
test("Playwright and Lighthouse integration using timespan", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  const flow = await startFlow(page, {
    config: desktopConfig,
    flags: { screenEmulation: { disabled: true } },
    name: "Playwright and Lighthouse integration using timespan",
  });

  // Start the timespan for auditing interactions
  await flow.startTimespan();

  const todoInput = await page.waitForSelector("[data-testid='todo-input']");
  const addButton = await page.waitForSelector("[data-testid='add-todo-btn']");

  await todoInput?.type("Buy groceries");
  await addButton?.click();

  await page.waitForSelector("[data-testid='todo-item']"); // Assuming 'todo-1' is the first item

  // End the timespan after interactions are complete
  await flow.endTimespan();

  // Close the browser
  await browser.close();

  // Generate and save the Lighthouse report
  writeFileSync("report.html", await flow.generateReport());
});
