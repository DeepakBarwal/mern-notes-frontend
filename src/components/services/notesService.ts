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

export const deleteNote = async (noteId: string) => {
    try {
        const response = await axios.delete(`${NOTES_API_URL}/${noteId}`);
        return response.data.removedNote;
    } catch (error) {
        console.error(error);
    }
};

export const updateNote = async (noteToUpdate: INote) => {
    try {
        const response = await axios.put(`${NOTES_API_URL}/${noteToUpdate._id}`, noteToUpdate);
        return response.data.updatedNote;
    } catch (error) {
        console.error(error);
    }
};