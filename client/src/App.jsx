import { useState, useEffect } from 'react';
import io from 'socket.io-client';

// Initialize socket connection outside the component to avoid multiple connections.
// We set autoConnect: false to have manual control over when to connect.
const socket = io('http://localhost:3000', { autoConnect: false });

const App = () => {
  // State to hold the list of messages.
  const [messages, setMessages] = useState([]);
  // State to manage the current input in the text field.
  const [messageInput, setMessageInput] = useState('');

  useEffect(() => {
    // Manually connect the socket when the component mounts.
    socket.connect();

    // Listen for incoming 'message' events from the server.
    // Use a functional update to ensure the latest state is used.
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Cleanup the socket listeners and disconnect when the component unmounts.
    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount.

  // Function to send a message to the server.
  const sendMessage = () => {
    // Check that the input is not empty or just whitespace.
    if (messageInput.trim() !== '') {
      // Emit the 'message' event with the current input.
      socket.emit('message', messageInput);
      // Clear the input field after sending the message.
      setMessageInput('');
    }
  };

  return (
    <div>
      <h1>Wechat App</h1>

      {/* Input field for typing messages */}
      <input
        type="text"
        value={messageInput}
        placeholder="Type your message..."
        onChange={(e) => setMessageInput(e.target.value)}
      />

      {/* Button to send the message. "Send" is visible to indicate its purpose. */}
      <button onClick={sendMessage}>Send</button>

      {/* Section to render all the received messages */}
      <section>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </section>
    </div>
  );
};

export default App;
