const scrapers = require("./scraper");

const scrapeController = async (browserInstance) => {
  const URL = "https://phongtro123.com/";
  try {
    const browser = await browserInstance;
    const categories = scrapers.scrapeCategory(browser, URL);
  } catch (error) {
    console.log("Error at scrapeController: " + error);
  }
};

module.exports = scrapeController;
