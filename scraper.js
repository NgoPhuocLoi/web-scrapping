const scrapeCategory = async (browser, url) =>
  new Promise(async (resolve, reject) => {
    try {
      const page = await browser.newPage();
      console.log(">> Opening new tab....");
      await page.goto(url);
      console.log(">> Going to " + url);
      await page.waitForSelector("#webpage");
      console.log(">> page is loaded...");

      const categoryData = await page.$$eval(
        "#navbar-menu > ul > li",
        (elements) =>
          elements.map((e) => ({
            category: e.querySelector("a").innerText,
            link: e.querySelector("a").href,
          }))
      );

      console.log(categoryData);

      await page.close();
      console.log(url + " is closed");
      resolve("hello");
    } catch (error) {
      console.log("Error at scrapeCategory: " + error);
      reject(error);
    }
  });

module.exports = {
  scrapeCategory,
};
