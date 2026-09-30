import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Button from './components/Button'
import Index from './components/Index'
import Examples from './components/Examples'
import ReactConditionalRender from './components/ReactConditionalRender'

function App() {
const [count,setCount] = useState(0);
    const handleMessageFromChild = (data)=>{
      console.log("Message From the Child",data)
    }
  return (
    <>
    {/* <div style={{fontSize:20}}>
      {count}
    </div>
    <Button click ={ ()=> setCount(count+1)} title={"Add"} bgColor={"red"} />
    <Button click={()=> setCount(count-1)} title={"Subtract"} bgColor={"blue"}/>
      <Index/> */}
      {/* <Examples  send={handleMessageFromChild} fruits={["Apple","Mango"]} car={{name:"audi",model:2020}}><span>Hello My name is kritam</span></Examples> */}
      <ReactConditionalRender/>
    </>
  )
}

export default App
