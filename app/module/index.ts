import { firefox, Browser, Page } from "playwright";

export default class ChatGptApp {
  private browser: Browser | null = null;

  async chats(userMessage: string, pageContext: Page) {
    try {
      const textarea = await pageContext.$(".wpaicg-chat-shortcode-typing");
      await textarea?.type(userMessage);
      await textarea?.press("Enter");
      const response = await pageContext.waitForResponse(
        "https://chataigpt.org/wp-admin/admin-ajax.php"
      );
      const responseData = await response?.json();
      return responseData?.data || "";
    } catch (error) {
      throw new Error("unable to give response.");
    }
  }

  async close() {
    await this.browser?.close();
  }

  async newPageContext() {
    const page = await this.browser?.newPage();
    await page?.goto("https://chataigpt.org/", {
      timeout: 120 * 1000,
    });
    await page?.screenshot({
      path: `images/examples-${Date.now()}.png`,
    });
    return page;
  }

  async connect() {
    try {
      const browser = await firefox.launch({
        headless: true,
      });
      this.browser = browser;
      return "connected";
    } catch (error) {
      throw new Error("unable to connect browser.");
    }
  }
}
