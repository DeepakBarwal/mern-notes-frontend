import axios from 'axios';
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