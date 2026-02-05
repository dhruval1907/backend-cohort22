import React from 'react'
import axios from "axios";
const App = () => {
  axios.get("http://localhost:3000/register")
  .then((res)=>{
    console.log(res.data);
  })
  return (
    <div className='h-screen w-full bg-black'>

    </div>
  )
}

export default App