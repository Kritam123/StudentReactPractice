import React from 'react'
import Son from './Son'

const Parent = () => {
  return (
    <Son name={"kritam"}>
        <p>
          This was written in the Parent component,
          but displayed as a part of the Son component
        </p>
    </Son>
  )
}

export default Parent