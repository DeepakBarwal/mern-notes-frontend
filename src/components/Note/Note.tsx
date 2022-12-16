import { FC, FocusEvent, useState } from 'react';
import INote from '../../interfaces/note.interface';
import './Note.css';

type Props = {
  note: INote;
  onNoteUpdate: (note: INote) => void;
};

// Dumb, presentational component
const Note: FC<Props> = ({ note, onNoteUpdate }) => {
  const [isFocused, setIsFocused] = useState(false);
  const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
    setIsFocused(false);
    const newTextValue = event.currentTarget.textContent;
    if (newTextValue === note.text) {
      return;
    }
    const updatedNoteObj: INote = {
      ...note,
      text: newTextValue || ''
    }
    onNoteUpdate(updatedNoteObj);
  }
  
  return (
    <div className={isFocused ? 'note note--focused' : 'note'}>
      <div 
        className='note__text' 
        contentEditable={true} 
        suppressContentEditableWarning={true}
        onBlur={noteTextUpdated}
        onFocus={() => setIsFocused(true)}
      >
        {note.text}
      </div>
      <div className='note__link'>
        <a href={note.link}>{note.link}</a>
      </div>
    </div>
  )
}

export default Note;