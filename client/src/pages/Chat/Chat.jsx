import React from "react";
import "./chat.css";
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import LogoSearch from "../../components/LogoSearch/LogoSearch";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { userChats } from "../../api/chatRequets";
import Conversation from "../../components/Conversation/Conversation";
import { Link } from "react-router-dom";
import { UilSetting } from "@iconscout/react-unicons";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";
import { useRef } from "react";

function Chat() {
  const { user } = useSelector((state) => state.authReducer.authData);
  // console.log(user);

  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage!==null) {
      socket.current.emit("send-message", sendMessage);}
  }, [sendMessage]);


  // Get the message from socket server
  useEffect(() => {
    socket.current.on("recieve-message", (data) => {
      console.log(data)
      setReceiveMessage(data);
    }

    );
  }, []);

  const checkOnlineStatus = (chat)=> {
    const chatMember = chat.members.find(((member)=>member!== user._id))
    const online = onlineUsers.find((user)=> user.userId === chatMember)
    return online? true: false
  }
  return (
    <div className="Chat">
      {/* Left side */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chat</h2>
          <div className="Chart-list">
            {chats.map((chat) => (
              <div onClick={() => setCurrentChat(chat)}>
                <Conversation data={chat} currentUserId={user._id} online={checkOnlineStatus(chat)}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="Right-side-chat">
        <div style={{ width: "20rem", alignSelf: "flex-end" }}>
          <div className="icons">
            <div className="navIcons">
              <Link to="../home">
                <img src={Home} alt="" />
              </Link>
            </div>
            <div className="navIcons">
              <UilSetting />
            </div>
            <div className="navIcons">
              <img src={Noti} alt="" />
            </div>
            <div className="navIcons">
              <Link to="/chat">
                <img src={Comment} alt="" />
              </Link>
            </div>
          </div>
          {/* chat body */}
          <ChatBox
            chat={currentChat}
            currentUser={user._id}
            setSendMessage={setSendMessage}
            receiveMessage={receiveMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
