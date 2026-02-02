import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [notes, setnotes] = useState([])

  useEffect(function () {
    axios.get("http://localhost:3000/api/notes/")
      .then((res) => {
        setnotes(res.data.note)
      })
  }, [])

  return (
    <>
      {
        notes.map((item, indx) => {
          return <div key={indx}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        })
      }
    </>
  )
}

export default App