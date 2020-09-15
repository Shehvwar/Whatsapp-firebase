import { Avatar} from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import db from './frebase'
function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState("")
    useEffect(() => {
      setSeed(Math.floor(Math.random()* 5000)) ;
        
    }, [])

    useEffect(()=>
    {
        if(id)
        {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot =>(setMessages(snapshot.docs.map((doc)=>doc.data()
            ))

            ))
        }
    }, [id])
    const createChat = () =>
    {
       const roomName = prompt("please enter a room name");
       
       if(roomName)
       {
           //some database related work
           db.collection('rooms').add({
               name:roomName,
           });
       }
    }
    return !addNewChat ? (
        <Link to = {`/rooms/${id}`}>
<div className = "sidebarChat">
            
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            
                {/* <Avatar src = "https://reactjsexample.com/content/images/2018/06/20180608151611.jpg" /> */}
                <div className = "sidebarchat__body">
                <h3>
                    {name}
                </h3>
    <p>{messages[0]?.message}</p>

            </div>
        </div>
        </Link>
        
    ) :(
        <div onClick = {createChat} className = "sidebarChat">
            <h2>Create new Room</h2>

        </div>
    );
}

export default SidebarChat
