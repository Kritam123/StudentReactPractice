import React from 'react'

const Form = () => {
    const [name,setName] = React.useState("");
    const [text,setText] = React.useState("");
    const handleChangeName = (e)=>{
        // console.log(e)
        setName(e.target.value)
    }
    const handleChangeText = (e)=>{
        // console.log(e)
        setText(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Submitted Name:",  {name,text}); 
    }
  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input
          type="text" 
          value={name}
          onChange={handleChangeName}
        /> 
        <textarea value={text}  onChange={handleChangeText}></textarea>
      </label>
      <p>Current value: {name}</p>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form


// import { useRef } from 'react';

// export default function UncontrolledForm() {
//   const nameRef = useRef(null);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Directly pulls the value from the DOM node
//     console.log('Submitted Name:', nameRef.current.value); 
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Seed an initial value using defaultValue instead of value */}
//       <input type="text" ref={nameRef} defaultValue="John Doe" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }