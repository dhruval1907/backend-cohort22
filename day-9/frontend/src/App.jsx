import React from 'react'
import axios from "axios";
import { useState } from 'react';
const App = () => {

  const [notes, setnotes] = useState([])
  axios.get("http://localhost:3000/api/notes")
    .then((res) => {
      setnotes(res.data.note)
    })
  return (
    <div className='notes'>
      {notes.map(function (note, idx) {
        return <div key={idx}>
          <div className="note">
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default App