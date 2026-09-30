import React from 'react'

const Examples = (props) => {
    console.log(props)
    console.log(props.fruits)
    console.log(props.car)
   const handleSendToParent = ()=>{
    props.send({name:"Kritam"});
   }

  return (
    <>
    {props.children}
    <button onClick={handleSendToParent}>send message</button>
    </>
    
  )
}

export default Examples