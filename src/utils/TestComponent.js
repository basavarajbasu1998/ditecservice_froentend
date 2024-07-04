import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
import io from "socket.io-client";

const TestComponent = () => {
  // const [message, setMessage] = useState("");
  // const socket = io("http://localhost:8080"); // Replace with your Spring Boot server URL.
  // useEffect(() => {
  //   socket.on("greetings", (message) => {
  //     setMessage(message);
  //   });
  //   // Clean up the socket connection when the component unmounts.
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, []);
  // const sendMessage = () => {
  //   socket.emit("hello", { name: "React" });
  // };
  // return (
  //   <div>
  //     <p>Message from Server: {message}</p>
  //     <button onClick={sendMessage}>Send Message</button>
  //   </div>
  // );
};

export default TestComponent;
