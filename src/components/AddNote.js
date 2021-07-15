import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [character, setCharacter] = useState(200);
  const [noteText, setNoteText] = useState("");
  const handleChange = (event) => {
    if (200 - event.target.value.length >= 0) {
      setCharacter(200 - event.target.value.length);
      setNoteText(event.target.value);
    }
  };
  const handleSaveClick = () => {
    if (noteText.trim().length > 0) {
      //   setCharacter(200 - noteText.length);
      handleAddNote(noteText);
      setCharacter(200);
      setNoteText("");
    }
  };
  return (
    <div className="note new">
      <textarea
        onChange={handleChange}
        rows="8"
        cols="8"
        value={noteText}
        placeholder="Type a note"
      ></textarea>
      <div className="note-footer">
        <small>{character} remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
