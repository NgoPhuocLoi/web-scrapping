const puppeteer = require("puppeteer");

const startBrowser = async () => {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ["--disable-setuid-sandbox"],
      ignoreHTTPSErrors: true,
    });
    return browser;
  } catch (error) {
    console.log("Error at starting browser: " + error);
  }
  return browser;
};

module.exports = startBrowser;
