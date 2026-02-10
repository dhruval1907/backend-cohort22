import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  const [users, setusers] = useState([])
  function fethcData() {
    axios.get("http://localhost:3000/api/auth/register",)
      .then((res) => {
        setusers(res.data.users);
      })
  }
  useEffect(() => {
    fethcData()
  }, [])

  return (
    <div className='h-screen w-full ' style={{ background: "linear-gradient(to top ,blue,lightblue,lightblue,white,white)" }}>
      
    </div>
  )
}

export default App