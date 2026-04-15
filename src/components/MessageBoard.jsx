import React from "react";


function MessageBoard() {
  const [messages, setMessages] = React.useState([
    { id: 1, text: "Hello all! This is the first message." }
  ]);
  const [newMessage, setNewMessage] = React.useState("");

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={(e) => {
          e.preventDefault();
          setMessages([...messages, { id: messages.length + 1, text: newMessage }]);
          setNewMessage("");
        }}>
          Submit
        </button>
      </div>
      <div class="board">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <h1>{message.text}</h1>
            <button className="delete-button" onClick={() => {
              setMessages(messages.filter((m) => m.id !== message.id));
            }}>
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
