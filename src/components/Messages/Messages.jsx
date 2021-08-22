import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import "./Messages.css";

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom>
      {messages.map((index, message) => {
        return <Message key={message} message={index} currentUser={name} />;
      })}
    </ScrollToBottom>
  );
};

export default Messages;
