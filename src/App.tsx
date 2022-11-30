import './App.css';
import axios from 'axios';

function App() {
  const getNotes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/notes`
      );
      console.log(response)
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
