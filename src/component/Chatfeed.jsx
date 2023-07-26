import React from 'react'
import Messageform from './Messageform';
import Mymessage from './Mymessage';
import Theirmessage from './Theirmessage';
const Chatfeed = (props) => {
  //destructor to use like convinient
  const { chats, activeChat, userName, messages } = props;
  //if chat is true
  const chat = chats && chats[activeChat];
  //to readreceipt
  const renderReadReceipts = (message,isMyMessage)=>
    chat.people.map((person,index)=> person.last_read === message.id && (
      <div
      key = {`read_${index}`}
      className="read-receipt"
      style={{
        float:isMyMessage? 'right':'left',
        backgroundImage:`url(${person?.person?.avatar})`     
      }}
      />
    ))

    
  

  //to generate a message
  const renderMessage = () => {
    //fetch all message
    //key is id of specific message
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      //message of that key
      const message = messages[key];
      console.log(message);
      //find last message key
      const lastMessagekey = index === 0 ? null : keys[index - 1];
      //to know if message is ours
      const isMyMessage = userName === message.sender.username;
      return (
        //return message
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className='message-block'>
            {/* render a meesage */}
            {
              isMyMessage
                ? <Mymessage message={message}/>
                : <Theirmessage message={message} lastMessage={message[lastMessagekey]}/>
            }
          </div>
          <div className='read-receipts' style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            

          </div>
        </div>
      )
    })
  }
  //if there is no chat
  if(!chat)
  return 'Loading...'
  return (
    <div className='chat-feed'>
      <div className="chat-title-container">
        <div className="chat-title">{chat.title}</div>
        <div className="chat-subtitle">
          {/* subtitle of chat */}
            {chat.people.map((person) => `${person.person.username}`)}
        </div>
      </div>
      {
      //call render message
      renderMessage()}
      <div style={{height : '100px'}}/>
      <div className='message-form-container'>
        <Messageform {...props} chatId = {activeChat}/>
      </div>
      </div>
  )
}
export default Chatfeed