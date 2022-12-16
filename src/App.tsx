import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';
import INote from './interfaces/note.interface';
import { getNotes } from './components/services/notesService';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>(JSON.parse(localStorage.getItem('my-notes') || JSON.stringify(DUMMY_NOTES)));

  const [showAddNoteModal, setShowAddNoteModal] = useState(false);

  const handleCloseAddNoteModal = () => setShowAddNoteModal(false);
  const handleShowAddNoteModal = () => setShowAddNoteModal(true);

  const saveNotesToLocalStorage = () => {
    const notesListString = JSON.stringify(notesList);
    localStorage.setItem('my-notes', notesListString);
  };

  useEffect(() => {
    getNotesFromBackend();
  }, []);

  useEffect(() => {
    saveNotesToLocalStorage();
  }, [notesList]);

  const getNotesFromBackend = async () => {
    const notes = await getNotes();
    setNotesList(notes);
    saveNotesToLocalStorage();
  };

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
      <Button variant="primary" onClick={handleShowAddNoteModal}>
        Launch demo modal
      </Button>

      <Modal show={showAddNoteModal} onHide={handleCloseAddNoteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddNoteModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseAddNoteModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
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
