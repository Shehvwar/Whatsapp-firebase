import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import {Avatar, IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from './SidebarChat';
import db from "./frebase"
function Sidebar() {

    const [rooms, setRooms] =useState([]);

    useEffect(() => {
        const unsubscribe = db.collection('rooms')
       db.collection('rooms').onSnapshot(snapShot =>(
           setRooms(snapShot.docs.map(doc =>
            ({
                id:doc.id,
                data:doc.data(),
            })
            ))
       )
       )

       return () =>
       {
           unsubscribe();
       }
    }, [])
    return ( 
        <div className = "sidebar">
           <div className = "sidebar__header">
               <Avatar />
             <div className = "sidebar__headerRight">
                 <IconButton>
                     <DonutLargeIcon />
                 </IconButton>
                 <IconButton>
                     <ChatIcon />
                 </IconButton>
                 <IconButton>
                     <MoreVertIcon />
                 </IconButton>

             </div>
           </div>
           <div className = "sidebar__search"> 
           <div className = "sidebar__SearchContainer">
           <SearchIcon />
            <input placeholder = "enter name to search" type = "text" />
           </div>
            
           </div>
           <div className = "sidebar__Chat">
               <SidebarChat addNewChat/>
               {rooms.map(room => (
                   <SidebarChat key = {room.id} id = {room.id}
                   name = {room.data.name} />
               ))}
           </div>

        </div>
    )
}

export default Sidebar
