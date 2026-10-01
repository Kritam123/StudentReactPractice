import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './components/Button'
import Index from './components/Index'
import Examples from './components/Examples'
import ReactConditionalRender from './components/ReactConditionalRender'
import Form from './components/form'
import UncontrolledForm from './components/form'

function App() {
const [count,setCount] = useState(0);
    const handleMessageFromChild = (z)=>{
      console.log("Message From the Child",data)
    }
  return (
    <>
    {/* <div style={{fontSize:20}}>
      {count}
    </div>
    <Button click ={ ()=> setCount(count+1)} title={"Add"} bgColor={"red"} />
    <Button click={()=> setCount(count-1)} title={"Subtract"} bgColor={"blue"}/>
    <Examples  send={handleMessageFromChild} fruits={["Apple","Mango"]} car={{name:"audi",model:2020}}><span>Hello My name is kritam</span></Examples>
    {/* <ReactConditionalRender/> */}
    {/* <Index/>  */}
    {/* <Form/> */}
    <UncontrolledForm/>
    </>
  )
}

export default App
