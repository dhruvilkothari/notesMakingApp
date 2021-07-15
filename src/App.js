import { useEffect, useState } from "react";
import { nanoid } from "nanoid";

import NoteList from "./components/NoteList";
import Search from "./components/Search";
import Header from "./components/Header";
const App = () => {
  const [notes, setNotes] = useState([]);

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
  const [darkMode, setDarkMode] = useState(false);
  let classes = darkMode ? "container dark-mode" : "container";

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("react-notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={classes}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NoteList
          handleAddNote={AddNote}
          notes={notes.filter((note) => {
            return note.text.toLocaleLowerCase().includes(searchText);
          })}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
