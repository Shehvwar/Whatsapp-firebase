import { Avatar} from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
import {useEffect, useState} from 'react'
function SidebarChat({addNewChat}) {

    const [seed, setSeed] = useState('');
    useEffect(() => {
      setSeed(Math.floor(Math.random()* 5000)) ;
        
    }, [])
    return (
        <div className = "sidebarChat">
            
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            
                {/* <Avatar src = "https://reactjsexample.com/content/images/2018/06/20180608151611.jpg" /> */}
                <div className = "sidebarchat__body">
                <h3>
                    Room Name
                </h3>
                <p>Initial</p>

            </div>
        </div>
    )
}

export default SidebarChat
