import React from 'react'
import { ChatEngine } from 'react-chat-engine'
import './App.css'
import Chatfeed from './component/Chatfeed'
import Loginform from './component/Loginform'
const App = () => {
  if(!localStorage.getItem('username')) return <Loginform/>
  return (
    // <div>App</div>
    <ChatEngine 
    height = "100vh"
    projectID = "305d88c5-71b6-46d1-86f3-08c63dd3cd44"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps}/>}
    >
    </ChatEngine>
  )
}
export default App