import React from 'react'

const Mymessage = ({message}) => {
    if(message.attachments&&message.attachments.length >0){
    //message is image
    return(
        <img 
        src={message.attachments[0].file}
        alt = 'message-attachment'
        className='message-image'
        style={{float :'right'}}/>
    )
    }
  return (
    <div className='message' style={{float:'right',marginRight:'18px',color:'white',background:'#3B2A50'}}>
        {message.text}
    </div>
  )
}

export default Mymessage