import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [users, setusers] = useState([])
  function fethcingData() {
    axios.get("http://localhost:3000/register")
      .then((res) => {
        setusers(res.data.users);
      })
  }
  useEffect(function () {
    fethcingData()
  }, [])

  axios.get("http://localhost:3000/register", {
    const {email}
  })


  return (
    <div className='h-screen w-full bg-black'>

    </div>
  )
}

export default App