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
      {/* <div>
        <button onClick={getNotes}>Click Me</button>
      </div> */}
      <div>
        <h4>{notesList[0]?.text}</h4>
        <h5>{notesList[0]?.link}</h5>
      </div>
    </div>
  );
}

export default App;
