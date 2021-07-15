import { useState } from "react";
import { nanoid } from "nanoid";

import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
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

  const deleteNote = (id) => {
    console.log("Ge");
    const newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

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

  const [searchText, setSearchText] = useState("");

  return (
    <div className="container">
      <Header />
      <Search handleSearchNote={setSearchText} />
      <NoteList
        handleAddNote={AddNote}
        notes={notes.filter((note) => {
          return note.text.toLocaleLowerCase().includes(searchText);
        })}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
