import React from 'react'

const Index = () => {
    const name = "Dahal"
    const array = [1,2,3,4]
  return (
    <div style={{display:'flex',flexDirection:"column", gap:10}}>
        {
            array.map((no)=>{
                return (
                    <>
                    <span>{no}</span>
                    </>
                )
            })
        }
    </div>
  )
}

export default Index