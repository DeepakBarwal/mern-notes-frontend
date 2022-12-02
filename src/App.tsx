import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';
import INote from './interfaces/note.interface';

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);

  useEffect(() => {
    const notesListString = JSON.stringify(notesList);
    localStorage.setItem('my-notes', notesListString);
  }, [notesList]);

  // const getNotes = async () => {
  //   try {
  //     const response = await axios.get(
  //       `http://localhost:5000/notes`
  //     );
  //     setNotesList(response.data.notes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  console.log(notesList);

  const updateNoteItem = (updatedNote: INote) => {
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === updatedNote._id) {
        return updatedNote;
      }
      return noteItem;
    });
    setNotesList(updatedList);
  }

  return (
    <div className="App">
      <div className="notes-list">
        {
          notesList.map((noteItem, index) => {
            return (
              <Note key={index} note={noteItem} onNoteUpdate={updateNoteItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
