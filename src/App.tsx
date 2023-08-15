import { useSelector } from "react-redux";
import { NewNoteInput } from "./NewNoteInput";
import { noteState } from "./notesReducer";
import { useDispatch } from "react-redux";
import { addNote } from "./Action";

function App() {
  const notes = useSelector<noteState, noteState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  };

  return (
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return <li key={note}>{note}</li>;
        })}
      </ul>
    </>
  );
}

export default App;
