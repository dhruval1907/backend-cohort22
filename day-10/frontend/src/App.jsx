import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // ================= GET =================
  function fetchDATA() {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        setNotes(res.data.note);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchDATA();
  }, []);

  // ================= POST =================
  function formHandle(e) {
    e.preventDefault();
    const { title, description } = e.target.elements;

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        description: description.value,
      })
      .then(() => {
        fetchDATA();
        e.target.reset();
      })
      .catch((err) => console.log(err));
  }

  // ================= DELETE =================
  function deleteHandle(id) {
    axios
      .delete("http://localhost:3000/api/notes/" + id)
      .then(() => fetchDATA())
      .catch((err) => console.log(err));
  }

  // ================= PATCH =================
  function updateHandle(id) {
    axios
      .patch("http://localhost:3000/api/notes/" + id, {
        title: editTitle,
        description: editDescription,
      })
      .then(() => {
        fetchDATA();
        setEditId(null);
        setEditTitle("");
        setEditDescription("");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="notes">
      <form onSubmit={formHandle}>
        <input type="text" name="title" placeholder="enter title" required />
        <input
          type="text"
          name="description"
          placeholder="enter description"
          required
        />
        <button>Create</button>
      </form>

      <hr />

      {notes.map((item) => (
        <div className="div" key={item._id}>
          {editId === item._id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <button onClick={() => updateHandle(item._id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{item.title}</h3>
              <p>{item.description}</p>

              <button onClick={() => deleteHandle(item._id)}>Delete</button>
              <button
                onClick={() => {
                  setEditId(item._id);
                  setEditTitle(item.title);
                  setEditDescription(item.description);
                }}
              >
                Edit
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
