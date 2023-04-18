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
    projectID = "7a18e2fd-7275-485f-97c7-768395f8569c"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps}/>}
    >
    </ChatEngine>
  )
}
export default App