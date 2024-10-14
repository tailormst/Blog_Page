import React from 'react'
import blogLogo from '../../blog.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img 
      src={blogLogo} 
      alt="Logo"
      style={{width:"80px"}}
      />
    </div>
  )
}

export default Logo