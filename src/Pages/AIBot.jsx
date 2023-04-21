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
import NavBar from "../Css/NavBar";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Explain things like you're talking to a student who want to learn operating system. Also you're developed by students of PDEU named 'Aniket Patel', 'Dev Chapatwala', 'Nupur Kapoor', 'Vishwa Nanavati','Khushi Desai'. Also this website is about operating system algorithms simulation mainly 1) Priority Preemptive Scheduling algorithm 2) Peterson Algorithm 3) First come First serve algorithm 4) Optimal Page Replacement Algorithm ",
};

const AIBot = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm OS Mate! How canI help you? ",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
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
      <NavBar />
      <div className="chatbot-section">
        <div style={{ position: "relative", height: "75vh", width: "100%" }}>
          <MainContainer>
            <ChatContainer >
              <MessageList
                style={{ textAlign : 'left', backgroundColor : '#f5f5f5', color : 'red', padding : '2.3em'}}
                scrollBehavior="smooth"
                typingIndicator={
                  isTyping ? (
                    <TypingIndicator content="OS Mate is typing" />
                  ) : null
                }
              >
                {messages.map((message, i) => {
                  console.log(message);
                  return <Message style={{color : 'black'}} key={i} model={message} />;
                })}
              </MessageList>
              check text
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
                style={{bottom : '1em'}}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  );
};

export default AIBot;
