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
function Chat() {
    const [input, setInput] = useState([])
    const [seed, setSeed] = useState('');
    const {roomId} = useParams()
    const [roomName, setRoomName] = useState("")

    useEffect(() => {
      if(roomId)
      {
          db.collection("rooms").doc(roomId).onSnapshot((snapShot) =>
            (
                setRoomName(snapShot.data().name)
            ))
      } 
    }, [roomId])
    // useEffect(() => {
    //   setSeed(Math.floor(Math.random()* 5000)) ;
        
    // }, [])

  const sendMessage = (e) =>
  {
      e.preventDefault();
      console.log("clicked", input)

      setInput("");
  }
     return (
        <div className = "chat">
            <div className = "chat__header">
            {/* <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/> */}
                <Avatar src = {`https://avatars.dicebear.com/api/human/${Math.floor(Math.random()* 5000)}.svg`}/>
                <div className = "header__chat">
                     <h3>{roomName}</h3>
                    <p>Time as per..</p>
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
               <p className = "chat_sendMessage">
               <span className = "chat_messageName">Subuhi CEO</span>
                   Hi there
                <span className = "chat__timeStamp">
                3:52 ISt
                </span>
               
               </p>

               <p className = {`chat_sendMessage ${true && "recive_message"} `}>
               <span className = "chat_messageName">Subuhi CEO</span>
                   Hi there
                <span className = "chat__timeStamp">
                3:52 ISt
                </span>
               
               </p>
               
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
