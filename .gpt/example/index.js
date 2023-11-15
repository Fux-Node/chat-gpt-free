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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = __importDefault(require("@/module"));
const programmeTest = () => __awaiter(void 0, void 0, void 0, function* () {
    const gpt = new module_1.default();
    yield gpt.connect();
    const chat1 = yield gpt.newPageContext();
    if (chat1) {
        const response1 = yield gpt.chats("hey", chat1);
        console.log(response1);
        const response2 = yield gpt.chats("I got a topic 'chat gpt revolution'", chat1);
        console.log(response2);
        const response3 = yield gpt.chats("could you please explain in long ?", chat1);
        console.log(response3);
    }
    yield gpt.close();
});
programmeTest();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9hcHAvZXhhbXBsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFrQztBQUVsQyxNQUFNLGFBQWEsR0FBRyxHQUFTLEVBQUU7SUFDL0IsTUFBTSxHQUFHLEdBQUcsSUFBSSxnQkFBVSxFQUFFLENBQUM7SUFDN0IsTUFBTSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFcEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxHQUFHLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekMsSUFBSSxLQUFLLEVBQUU7UUFDVCxNQUFNLFNBQVMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsTUFBTSxTQUFTLEdBQUcsTUFBTSxHQUFHLENBQUMsS0FBSyxDQUMvQixxQ0FBcUMsRUFDckMsS0FBSyxDQUNOLENBQUM7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZCLE1BQU0sU0FBUyxHQUFHLE1BQU0sR0FBRyxDQUFDLEtBQUssQ0FDL0Isb0NBQW9DLEVBQ3BDLEtBQUssQ0FDTixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN4QjtJQUVELE1BQU0sR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQSxDQUFDO0FBRUYsYUFBYSxFQUFFLENBQUMifQ==