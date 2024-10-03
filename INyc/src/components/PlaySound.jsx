import React from 'react'


const PlaySound  = () => {
    const audioUrl = 'https://soundcloud.com/elevator-representation/stand-clear-of-the-closing'; 
    

  return (
    
    <div>
      
      <AudioPlayer audioUrl={audioUrl} />
    </div>
  
  )
}

export default PlaySound
