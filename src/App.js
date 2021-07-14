import { useState } from "react";
import { nanoid } from "nanoid";

import NoteList from "./components/NoteList";
const App = () => {
  const [notes, setNotes] = useState([
    {
      text: "This is my first Note",
      date: "15/20/2021",
      id: nanoid(),
    },
    {
      text: "This is my second Note",
      date: "15/20/2021",
      id: nanoid(),
    },
    {
      text: "This is my third Note",
      date: "15/20/2021",
      id: nanoid(),
    },
    {
      text: "This is my first Note",
      date: "15/20/2021",
      id: nanoid(),
    },
  ]);
  const AddNote = (text) => {
    setNotes((prevState) => {
      const date = new Date();
      const newNote = {
        text: text,
        date: date.toLocaleDateString(),
        id: nanoid(),
      };

      return [...prevState, newNote];
    });
  };

  return (
    <div className="container">
      <NoteList handleAddNote={AddNote} notes={notes} />
    </div>
  );
};

export default App;
