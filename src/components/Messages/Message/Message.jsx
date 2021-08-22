import React from "react";
import "./Message.css";

const Message = ({ message: { user, text }, currentUser }) => {
  let isSentByUser = false;
  const trimmedName = user.trim().toLowerCase();
  console.log(trimmedName);
  if (currentUser === trimmedName) {
    isSentByUser = true;
  }

  return isSentByUser ? (
    <div className="messageContainer jutifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText">{trimmedName}</p>
    </div>
  );
};

export default Message;
