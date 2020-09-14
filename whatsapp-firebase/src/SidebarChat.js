import { Avatar} from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
function SidebarChat({id, name, addNewChat}) {

    const [seed, setSeed] = useState('');
    useEffect(() => {
      setSeed(Math.floor(Math.random()* 5000)) ;
        
    }, [])

    const createChat = () =>
    {
       const RoomName = prompt("please enter a room name");
       
       if(RoomName)
       {
           //some database related work
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
                <p>Initial</p>

            </div>
        </div>
        </Link>
        
    ) :(
        <div onClick = {createChat} className = "sidebarChat">
            <h2>Create new chat</h2>

        </div>
    );
}

export default SidebarChat
