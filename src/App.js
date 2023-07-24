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
    projectID = "a3b485ae-f40d-416c-af9d-61b2e7ec4a5a"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps}/>}
    >
    </ChatEngine>
  )
}
export default App