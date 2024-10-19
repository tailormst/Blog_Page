import React from 'react'
import blogLogo from '../../AIlogo.png'

function Logo({width = '100px'}) {
  return (
    <div>
      <img 
      src={blogLogo} 
      alt="Logo"
      style={{width:"200px"}}
      />
    </div>
  )
}

export default Logo