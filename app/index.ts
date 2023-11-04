import ChatGptApp from "./module";

const programmeTest = async () => {
  const gpt = new ChatGptApp();
  await gpt.connect();

  const chat1 = await gpt.newPageContext()
  if(chat1){
    const response1 = await gpt.chats("hey",chat1)
    console.log(response1)
    const response2 = await gpt.chats("I got a topic 'india vs bharat'",chat1)
    console.log(response2)
    const response3 = await gpt.chats("could you please explain in long ?",chat1)
    console.log(response3)
  }

//   const chat2 = await gpt.newPageContext()
//   if(chat2){
//     const response1 = await gpt.chats("hey gpt, you are lyrics writer.",chat2)
//     console.log(response1)
//     const response2 = await gpt.chats("which artist do you think that you can copy better ?",chat2)
//     console.log(response2)
//   }

  await gpt.close()
//   await gpt2.initialize();
};

programmeTest();
