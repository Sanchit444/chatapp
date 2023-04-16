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
    projectID = "354215fc-6248-4d1c-add5-02581139873e"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps}/>}
    >
    </ChatEngine>
  )
}
export default App