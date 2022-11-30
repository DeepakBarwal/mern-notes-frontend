import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';

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
      <div>Notes Application</div>
      <div className="notes-list">
        {
          notesList.map((noteItem, index) => {
            return (
              <div key={index}>
                <h4>{noteItem?.text}</h4>
                <h5>{noteItem?.link}</h5>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
