import React from 'react'
import './App.css'
import { useState } from 'react'
function App() {
const [press, setPress] = useState(0)
  return (
    <div>
      <h2 className='ml-5 mt-5'>You have clicked this button <span className='text-danger'>{press}</span> times</h2>
      <button className='btn btn-primary ml-5' onClick={() => setPress(press + 1)}>Click Me</button>
    </div>
  )
}

export default App