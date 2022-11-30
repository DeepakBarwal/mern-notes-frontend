import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [notesList, setNotesList] = useState([]);

  const getNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/notes`
      );
      setNotesList(response.data.notes);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="App">
      <div>Notes Application</div>
      <div>
        <button onClick={getNotes}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
