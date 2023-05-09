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
    projectID = "69991752-03ae-4258-9027-b90a1acca2af"
    userName={localStorage.getItem('username')}
    userSecret={localStorage.getItem('password')}
    renderChatFeed = {(chatAppProps) => <Chatfeed {...chatAppProps}/>}
    >
    </ChatEngine>
  )
}
export default App