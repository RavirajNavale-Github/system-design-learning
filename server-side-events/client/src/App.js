
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a new EventSource connected to the server endpoint
    const eventSource = new EventSource('http://localhost:3000/events');

    // Handle incoming messages from the server
    eventSource.onmessage = (event) => {
      // Update the state with the new message
      setMessages((prevMessages) => [...prevMessages, event.data]);
    };

    // Cleanup the EventSource on component unmount
    return () => {
      eventSource.close();
    };
  }, []);


  return (
    <div className="App">
      <h1>Server-Sent Events Example</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
