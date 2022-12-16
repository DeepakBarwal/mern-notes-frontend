import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DUMMY_NOTES from './DUMMY_NOTES';
import Note from './components/Note/Note';
import INote from './interfaces/note.interface';
import { getNotes, createNote } from './components/services/notesService';
import { Button, Modal } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>(JSON.parse(localStorage.getItem('my-notes') || JSON.stringify(DUMMY_NOTES)));
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNote, setNewNote] = useState<Partial<INote>>({
    link: '',
    text: ''
  });

  const handleCloseAddNoteModal = () => {
    setNewNote({
      link: '',
      text: ''
    });
    setShowAddNoteModal(false);
  }
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

  const updateNoteItem = (updatedNote: INote) => {
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === updatedNote._id) {
        return updatedNote;
      }
      return noteItem;
    });
    setNotesList(updatedList);
  }

  const addNote = async () => {
    const savedNote = await createNote(newNote);
    setNotesList([...notesList, savedNote]);
    handleCloseAddNoteModal();
  };

  return (
    <div className="App">
      <Button variant="primary" onClick={handleShowAddNoteModal}>
        Launch demo modal
      </Button>

      <Modal show={showAddNoteModal} onHide={handleCloseAddNoteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel
          controlId="floatingTextarea"
          label="Text"
          className="mb-3"
          >
            <Form.Control as="textarea" placeholder="Enter your note text" onChange={(e) => {
              const newVal = e.currentTarget.value;
              setNewNote({
                ...newNote,
                text: newVal
              });
            }} />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Link"
            className="mb-3 note-link"
          >
          <Form.Control type='url' placeholder="Enter Note URL" onChange={(e) => {
            const newVal = e.currentTarget.value;
            setNewNote({
              ...newNote,
              link: newVal
            });
          }} />
      </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddNoteModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
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
