const puppeteer = require("puppeteer");
const useProxy = require("puppeteer-page-proxy");
const url = "https://www.facebook.com/";

const TIMEOUT = 10000;

const USERNAME_SELECTOR = "#email";
const PASSWORD_SELECTOR = "#pass";

let username = "BrandenbergerLily104@spamavert.net";
console.log(username);

let password = "facebook@123";
console.log("Password", password);

let ip = "103.199.187.72";
let port = "45785";
let userIp = "Selkaustavghosh";
let pip = "G4q3TcW";
setTimeout(() => {
    init();
}, 5000);
init = async () => {
    console.log("init Called");
  var { browser, page } = await startBrowser(ip, port, userIp, pip);
  page.setViewport({ width: 1366, height: 768 });

  await page.goto("https://dnsleaktest.com/", {
    waitUntil: "networkidle2",
  });

  await page.waitForTimeout(4000);

  await page.goto(url);
  console.log("Go to URL");

  await page.click(USERNAME_SELECTOR); // click username selector
  await page.waitForTimeout(4000);

  await page.keyboard.type(username); // Type the user name in the user input field
  await page.waitForTimeout(4000);

  await page.click(PASSWORD_SELECTOR); // click password selector
  await page.waitForTimeout(2000);

  await page.keyboard.type(password); // Type the password in the user input field
  await page.waitForTimeout(3000);

  await page.keyboard.press("Enter"); // Hit enter for login
  await page.waitForTimeout(TIMEOUT + 10000);
  await page.goto(url);
  await page.waitForSelector('[href="/groups/"]');
  // Click on the GROUP tab

  await page.click("[href='/groups/']");

  await page.waitForTimeout(TIMEOUT);

  await page.waitForSelector('[placeholder="Search groups"]');


  await page.click('[placeholder="Search groups"]');


  await page.keyboard.type("Store"); // Type search string

  console.log("Search String Entered");
  await page.keyboard.press("Enter"); // Hit enter

  await page.waitForTimeout(TIMEOUT);

  await page.click('[role="article"] [role="link"] span');

  await page.waitForTimeout(TIMEOUT);
  await browser.close();
};

// Starting the Browser
startBrowser = async (ip, port, userIp, pip) => {
  const browser = await puppeteer.launch({
    args: [`--proxy-server=${ip}:${port}`],
    headless: false, // true by default. False means we can not see the browser
    // args: ['--proxy-server=139.5.29.97:39241']
  });
  const page = await browser.newPage();
  // await useProxy(page, 'http://125.16.111.194:8080');

  // Authenticate Proxy IP
  await page.authenticate({
    username: userIp,
    password: pip,
  });

  return { browser, page };
};
