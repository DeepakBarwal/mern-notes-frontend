import { FC, FocusEvent } from 'react';
import INote from '../../interfaces/note.interface';
import './Note.css';

type Props = {
  note: INote
};

const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
  console.log(event.currentTarget.textContent);
}

// Dumb, presentational component
const Note: FC<Props> = ({ note }) => {
  return (
    <div className='note'>
      <div 
        className='note__text' 
        contentEditable={true} 
        suppressContentEditableWarning={true}
        onBlur={noteTextUpdated}
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