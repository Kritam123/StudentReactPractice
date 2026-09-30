import React from 'react'

function Button({title,bgColor,fontSize,width,padding,click}) {
  return (
    <button onClick={click}  style={{backgroundColor:bgColor,fontSize,width,padding}}>{title}</button>
  )
}

export default Button