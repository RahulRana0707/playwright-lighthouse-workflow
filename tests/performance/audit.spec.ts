import { test } from "@playwright/test";
import { playAudit } from "playwright-lighthouse";

test("should pass lighthouse audit", async () => {
  const browser = await test["chromium"].launch({
    args: ["--remote-debugging-port=9222"],
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000");

  await playAudit({
    page: page,
    port: 9222,
    thresholds: {
      "best-practices": 1,
      seo: 1,
      pwa: 1,
      accessibility: 1,
      performance: 1,
    },
    opts: {
      formFactor: "desktop",
      screenEmulation: {
        deviceScaleFactor: 1,
        mobile: false,
        width: 1200,
        height: 800,
      },
    },
    reports: {
      formats: {
        html: true,
      },
      name: `lighthouse-report-${Date.now()}`,
      directory: "./lighthouse-reports",
    },
  });
  await browser.close();
});
