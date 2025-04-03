import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './App.css';

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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white text-center py-3 text-lg font-semibold">
          WeChat App
        </div>

        {/* Chat Messages */}
        <div className="p-4 h-80 overflow-y-auto flex flex-col space-y-2">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`px-4 py-2 rounded-lg max-w-xs ${
                index % 2 === 0
                  ? 'bg-gray-200 self-start'
                  : 'bg-blue-400 text-white self-end'
              }`}
            >
              {message}
            </div>
          ))}
        </div>

        {/* Input Box */}
        <div className="flex items-center border-t border-gray-300 p-3">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={messageInput}
            placeholder="Type your message..."
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button
            onClick={sendMessage}
            className="ml-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
