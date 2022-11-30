import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';

function App() {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);

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

  return (
    <div className="App">
      <div className="notes-list">
        {
          notesList.map((noteItem, index) => {
            return (
              <Note key={index} note={noteItem} />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
