import React from 'react'
import { SendOutlined,PictureOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { sendMessage, isTyping } from 'react-chat-engine';
const Messageform = (props) => {
    const [value,setValue] = useState('');
    const {chatId,creds} = props;
    const handleChange = (event)=>{
        setValue(event.target.value);
    }
    const handleSubmit = (event)=>{
        event.preventDefault() //browser won't refresh after submit
        const text = value.trim(); //remove white space of text
        if(text.length > 0){ 
        sendMessage(creds,chatId,{text});
        }  //send a message
        setValue(''); //blank a textbox after sending a message
    }
    //upload a files
    const handleUpload =(event)=>{
      sendMessage(creds,chatId,{files:event.target.files,text:''})
    }
  return (
   <form className='message-form' onSubmit={handleSubmit}>
    <input
    className='message-input'
    placeholder='Send a message...'
    value={value}
    onChange={handleChange}
    onSubmit={handleSubmit}></input>
    {/* //upload an image */}
    <label htmlFor='upload-button'>
      <span className='image-button'>
        <PictureOutlined className='picture-icon'/> 
      </span>
    </label>
    <input 
      type='file'
      multiple={false}
      id='upload-button'
      style={{display:'none'}}
      onChange={handleUpload}
      />
      <button type='submit' className='send-button'>
        <SendOutlined className='send-icon'/>
      </button>
   </form>
  )
}

export default Messageform