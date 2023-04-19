import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const API_KEY = "dummy API here";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};
const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm OSMate bot! Ask me anything!",
      sentTime: "just now",
      sender: "OSProject bot",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  // creating message object with message as input given from user and then passing to message state above
  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };
    // getting all old messages + the recent new message
    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });
  
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        systemMessage,
        ...apiMessages,
      ],
    };
  
    // Check if the user's input is related to the OS project
    const lastUserMessage = chatMessages[chatMessages.length - 1];
    const osProjectKeywords = ["OS project", "Github repository", "Aniket-Patel-swg/os-project"];
    const isOSProjectRelated = osProjectKeywords.some((keyword) =>
      lastUserMessage.message.toLowerCase().includes(keyword.toLowerCase())
    );
  
    // If the user's input is not related to the OS project, redirect the conversation
    if (!isOSProjectRelated) {
      const redirectMessage = {
        message: "Let's talk about the OS project! What would you like to know?",
        direction: "incoming",
        sender: "ChatGPT",
      };
      setMessages([...chatMessages, redirectMessage]);
      setIsTyping(false);
      return;
    }
  
    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }
  
  
  return (
    <>
      <div className="chat-section">
        <div className="App">
          <div
            style={{ position: "abosolute", height: "800px", width: "700px" }}
          >
            <MainContainer>
              <ChatContainer>
                <MessageList
                  scrollBehavior="smooth"
                    typingIndicator={
                    isTyping ? (
                      <TypingIndicator content="OSMate is typing" />
                    ) : null
                  }
                >
                  {messages.map((message, i) => {
                    console.log(message);
                    return <Message key={i} model={message} />;
                  })}
                </MessageList>
                <MessageInput
                  placeholder="Type message here"
                  onSend={handleSend}
                />
              </ChatContainer>
            </MainContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
