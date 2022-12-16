import axios from 'axios';
import INote from '../../interfaces/note.interface';
import { NOTES_API_URL } from '../constants/api';

export const getNotes = async () => {
    try {
      const response = await axios.get(
        `${NOTES_API_URL}`
      );
      return response.data.notes;
    } catch (error) {
      console.error(error);
    }
};

export const createNote = async (newNote: Partial<INote>) => {
    try {
        const response = await axios.post(NOTES_API_URL, newNote);
        return response.data.note;
    } catch (error) {
        console.error(error);
    }
};