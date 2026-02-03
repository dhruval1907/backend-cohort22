import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [notes, setnotes] = useState([])

  function fetchData() {
    axios.get("http://localhost:3000/api/notes/")
      .then((res) => {
        setnotes(res.data.note)
      })
  }
  useEffect(function () {
    fetchData()
  }, [])

  function handelSubmit(e) {
    e.preventDefault()

    const { title, description } = e.target.elements

    console.log(title.value, description.value);

    axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      description: description.value
    }).then((res) => {
      console.log(res);
      fetchData()
    })

  }

  function deleteHandler(noteId) {
    console.log(noteId);

    // axios.delete("http://localhost/3000/api/notes",{

    // })
  }

  return (
    <div className='notes'>
      <form className='form' onSubmit={handelSubmit}>
        <input name='title' type="text" placeholder='enter title' />
        <input name='description' type="text" placeholder='enter description' />
        <input type="submit" />
      </form>
      {
        notes.map((item) => {
          return (
            <div key={item._id} className='note'>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button onClick={() => deleteHandler(item._id)}>
                delete
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default App