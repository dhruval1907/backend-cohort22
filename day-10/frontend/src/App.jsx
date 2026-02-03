import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [notes, setnotes] = useState([])

  function fetchDATA() {
    axios.get("http://localhost:3000/api/notes")
      .then((res) => {
        setnotes(res.data.note)
      })
  }
  useEffect(function () {
    fetchDATA()
  }, [])

  function formHandle(e) {
    e.preventDefault()
    const { title, description } = e.target.elements
    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    })
    fetchDATA()
  }
  function deleteHandle(noteID) {
    axios.delete("http://localhost:3000/api/notes/" + noteID)
  }

  return (
    <div className='notes'>
      <form onSubmit={formHandle}>
        <input type="text" name="title" id="" placeholder='enter a task' />
        <input type="text" name="description" id="" placeholder='enter a description' />
        <button>create</button>
      </form>
      {notes.map((item, indx) => {
        return <div className='div' key={indx}>
          <h1>{item.title}</h1>
          <h1>{item.description}</h1>
          <button onClick={() => {
            deleteHandle(item._id)
          }}>delete</button>
        </div>
      })}
    </div>
  )
}

export default App