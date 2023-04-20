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

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a student interested in operating system projects",
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
      // check if the last message is "What you can do for me!"
    const lastMessage = chatMessages[chatMessages.length - 1].message;
    if (lastMessage === "What you can do for me!") {
      setMessages([
        ...chatMessages,
        {
          message: "I can solve your all Operating System Related Doubts",
          sender: "ChatGPT",
        },
      ]);
      setIsTyping(false);
      return;
    }
    // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act.
    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      temperature : 0.5,
      messages: [
        systemMessage, // The system message DEFINES the logic of our chatGPT
        ...apiMessages, // The messages from our chat with ChatGPT
      ],
    };

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
           <div className="active-chatbot-section">
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
                          // console.log(message);
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
      </div>
    </>
  );
};

export default ChatBot;
