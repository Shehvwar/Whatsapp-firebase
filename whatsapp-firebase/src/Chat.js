import React, { useEffect, useState} from 'react'
import {Avatar, IconButton} from "@material-ui/core"
import {SearchOutlined} from "@material-ui/icons"
import {AttachFileOutlined} from "@material-ui/icons"
import {MoreVert} from "@material-ui/icons"
import './Chat.css'
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import MicIcon from '@material-ui/icons/Mic';
import { useParams } from 'react-router-dom'
import db from './frebase'
import { useStateValue } from './StateProvider'
import firebase from "firebase";
function Chat() {
    const [input, setInput] = useState([]);
    const [seed, setSeed] = useState('');
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue()
    useEffect(() => {
      if(roomId)
      {
          db.collection("rooms")
          .doc(roomId)
          .onSnapshot((snapshot) =>
            setRoomName(snapshot.data().name));


            db.collection('rooms').doc(roomId).collection('messages').orderBy('timestamp', 'asc').onSnapshot(snapshot =>(
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
      } 
    }, [roomId])
    useEffect(() => {
      setSeed(Math.floor(Math.random()* 5000)) ;
        
    }, [roomId])

  const sendMessage = (e) =>
  {
      e.preventDefault();
      console.log("clicked", input)

      db.collection('rooms').doc(roomId).collection('messages').add(({
          message:input,
          name:user.displayName,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
      }))

      setInput("");
  }
     return (
        <div className = "chat">
            <div className = "chat__header">
            {/* <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}
                <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = "header__chat">
                     <h3>{roomName}</h3>
                     <p>last seen {""}
                         {new Date (messages[messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>  
                <div className = "header__attachment">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlined />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>

                </div>  
            </div>
            <div className = "chat__body">
                {messages.map(message => (
                <p className = {`chat_sendMessage ${message.name === user.displayName && "recive_message"} `}>
                <span className = "chat_messageName">{message.name}</span>
                    {message.message}
                 <span className = "chat__timeStamp">
                 {new Date(message.timestamp?.toDate()).toUTCString()}
                 </span>
                
                </p>
                ))}
               {/* <p className = "chat_sendMessage">
               <span className = "chat_messageName">Subuhi CEO</span>
                   Hi there
                <span className = "chat__timeStamp">
                3:52 ISt
                </span>
               
               </p> */}

               
               
            </div>
            <div className = "chat__footer">
                <IconButton>
                <EmojiEmotionsIcon/>
                </IconButton>
                
                <form>
                    <input 
                    placeholder = "enter your message" 
                    value= {input}
                    onChange = {(e)=>setInput(e.target.value)}
                    
                    type = "text" />
                    <button onClick = {sendMessage}type = "submit">send</button>
                </form>
                <IconButton>
                <MicIcon ></MicIcon>
                </IconButton>
                
            </div>
        </div>
    )
}

export default Chat;
