import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <TodoForm notes={notes} setNotes={setNotes} />
    </>
  );
};

export default App;