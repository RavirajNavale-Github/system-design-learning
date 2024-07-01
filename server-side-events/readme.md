# Introduction to Server Side/Sent Events

# What are Server-Side Events (SSE)?

Server-Sent Events (SSE) is a technology that enables servers to push real-time updates to clients over a single HTTP connection.
This is particularly useful for applications that require live updates, such as news feeds, live cricket score updates, stock tickers, or chat applications.
Unlike traditional request-response mechanisms, where clients must repeatedly poll the server for updates, SSE allows servers to initiate data transmission to clients as soon as new data is available.

# Why use SSE:

SSE provides a simple and efficient way to push real-time updates from the server to the client without the need for complex client-side polling mechanisms.
By maintaining a persistent connection between the server and the client, SSE reduces latency and improves the responsiveness of web applications.
SSE is easy to implement and requires minimal setup on both the server and the client, making it an ideal choice for applications that require real-time communication.
SSE is supported by most modern web browsers and can be used alongside other web technologies like AJAX, WebSockets, and HTTP/2.

# Benefits of SSE:

Uses standard HTTP, making it easier to integrate with existing web infrastructure.
The client automatically tries to reconnect if the connection is lost.
Events are sent as plain text, which makes them easy to debug and understand.
SSE is efficient for sending small, frequent updates.

# How to implement SSE?

We'll create a simple scenario where the server sends the current time to the client every second. We'll use Express for the server-side and React for the client-side.

# Step 1:Server Side Implementation: Project setup (Express)

```bash

mkdir server
cd server
npm init -y

```

Install the required dependencies:

```bash

npm install express cors

```

# Step 2:Create and initialise Server

```js
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

app.get("/events", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  // Send an initial event
  res.write(`data: Connected\n\n`);

  // Send a new message every second
  setInterval(() => {
    const message = `data: ${new Date().toLocaleTimeString()}\n\n`;
    res.write(message);
  }, 1000);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

# Step 3:Client Side Implementation (ReactJS)

Project Setup:

```bash

mkdir client
cd client
npx create-react-app .

```

Update App.js file with following code:

```js
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Create a new EventSource connected to the server endpoint
    const eventSource = new EventSource("http://localhost:3000/events");

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
```

# Step 4:Start Express Server and the React App

Start the Express Server:

```bash

node/nodemon index.js

```

Start the React App.

```bash

npm start

```

# Step 5:Open React App.

Navigate to http://localhost:3000 in your web browser or any other PORT. You should see real-time updates of the current time every second.

# Conclusion:

Server-Sent Events (SSE) is a straightforward way to implement real-time updates from the server to the client using standard HTTP connections. In this guide, we demonstrated how to set up SSE with Express on the server side and React on the client side, providing a clear and simple example for beginners.
