import { test, expect, Page } from "@playwright/test";
let page: Page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

test("should add a new todo", async () => {
  const todoInput = page.getByTestId("todo-input");
  const addButton = page.getByTestId("add-todo-btn");

  await todoInput.fill("Buy groceries");
  await addButton.click();

  const todoItem = page.getByTestId("todo-item"); // Assuming 'todo-1' is the first item
  await expect(todoItem).toContainText("Buy groceries");
});
