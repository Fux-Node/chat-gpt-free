"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const playwright_1 = require("playwright");
class ChatGptApp {
    constructor() {
        this.browser = null;
    }
    chats(userMessage, pageContext) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const textarea = yield pageContext.$(".wpaicg-chat-shortcode-typing");
                yield (textarea === null || textarea === void 0 ? void 0 : textarea.type(userMessage));
                yield (textarea === null || textarea === void 0 ? void 0 : textarea.press("Enter"));
                const response = yield pageContext.waitForResponse("https://chataigpt.org/wp-admin/admin-ajax.php");
                const responseData = yield (response === null || response === void 0 ? void 0 : response.json());
                return (responseData === null || responseData === void 0 ? void 0 : responseData.data) || "";
            }
            catch (error) {
                throw new Error("unable to give response.");
            }
        });
    }
    close() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            yield ((_a = this.browser) === null || _a === void 0 ? void 0 : _a.close());
        });
    }
    newPageContext() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const page = yield ((_a = this.browser) === null || _a === void 0 ? void 0 : _a.newPage());
            yield (page === null || page === void 0 ? void 0 : page.goto("https://chataigpt.org/", {
                timeout: 120 * 1000,
            }));
            yield (page === null || page === void 0 ? void 0 : page.screenshot({
                path: `images/examples-${Date.now()}.png`,
            }));
            return page;
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const browser = yield playwright_1.firefox.launch({
                    headless: true,
                });
                this.browser = browser;
                return "connected";
            }
            catch (error) {
                throw new Error("unable to connect browser.");
            }
        });
    }
}
exports.default = ChatGptApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvbW9kdWxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQW9EO0FBRXBELE1BQXFCLFVBQVU7SUFBL0I7UUFDVSxZQUFPLEdBQW1CLElBQUksQ0FBQztJQTJDekMsQ0FBQztJQXpDTyxLQUFLLENBQUMsV0FBbUIsRUFBRSxXQUFpQjs7WUFDaEQsSUFBSTtnQkFDRixNQUFNLFFBQVEsR0FBRyxNQUFNLFdBQVcsQ0FBQyxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQztnQkFDdEUsTUFBTSxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUEsQ0FBQztnQkFDbEMsTUFBTSxDQUFBLFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQztnQkFDL0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxXQUFXLENBQUMsZUFBZSxDQUNoRCwrQ0FBK0MsQ0FDaEQsQ0FBQztnQkFDRixNQUFNLFlBQVksR0FBRyxNQUFNLENBQUEsUUFBUSxhQUFSLFFBQVEsdUJBQVIsUUFBUSxDQUFFLElBQUksRUFBRSxDQUFBLENBQUM7Z0JBQzVDLE9BQU8sQ0FBQSxZQUFZLGFBQVosWUFBWSx1QkFBWixZQUFZLENBQUUsSUFBSSxLQUFJLEVBQUUsQ0FBQzthQUNqQztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUM7S0FBQTtJQUVLLEtBQUs7OztZQUNULE1BQU0sQ0FBQSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLEtBQUssRUFBRSxDQUFBLENBQUM7O0tBQzdCO0lBRUssY0FBYzs7O1lBQ2xCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQSxNQUFBLElBQUksQ0FBQyxPQUFPLDBDQUFFLE9BQU8sRUFBRSxDQUFBLENBQUM7WUFDM0MsTUFBTSxDQUFBLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLENBQUMsd0JBQXdCLEVBQUU7Z0JBQ3pDLE9BQU8sRUFBRSxHQUFHLEdBQUcsSUFBSTthQUNwQixDQUFDLENBQUEsQ0FBQztZQUNILE1BQU0sQ0FBQSxJQUFJLGFBQUosSUFBSSx1QkFBSixJQUFJLENBQUUsVUFBVSxDQUFDO2dCQUNyQixJQUFJLEVBQUUsbUJBQW1CLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTTthQUMxQyxDQUFDLENBQUEsQ0FBQztZQUNILE9BQU8sSUFBSSxDQUFDOztLQUNiO0lBRUssT0FBTzs7WUFDWCxJQUFJO2dCQUNGLE1BQU0sT0FBTyxHQUFHLE1BQU0sb0JBQU8sQ0FBQyxNQUFNLENBQUM7b0JBQ25DLFFBQVEsRUFBRSxJQUFJO2lCQUNmLENBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztnQkFDdkIsT0FBTyxXQUFXLENBQUM7YUFDcEI7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7YUFDL0M7UUFDSCxDQUFDO0tBQUE7Q0FDRjtBQTVDRCw2QkE0Q0MifQ==