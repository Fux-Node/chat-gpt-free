import ChatGptApp from "@/module";

const programmeTest = async () => {
  const gpt = new ChatGptApp();
  await gpt.connect();

  const chat1 = await gpt.newPageContext();
  if (chat1) {
    const response1 = await gpt.chats("hey", chat1);
    console.log(response1);
    const response2 = await gpt.chats(
      "I got a topic 'chat gpt revolution'",
      chat1
    );
    console.log(response2);
    const response3 = await gpt.chats(
      "could you please explain in long ?",
      chat1
    );
    console.log(response3);
  }

  await gpt.close();
};

programmeTest();
