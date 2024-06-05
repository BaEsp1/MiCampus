import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface User {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    birthdate: string;
    representante: {
        relacion: string;
        name: string;
        telefono: string;
        correoElectronico: string;
    };
}

const API_URL = 'endpoint';

export const updateUser = async (data: User) => {
    try {
        const response = await axios.post(`${API_URL}/updateUser`, data);
        return response.data;
    } catch (error) {
        throw new Error('Error actualizando el usuario');
    }
};

export const fetchProfesor = createAsyncThunk(
    'user/fetchProfesor',
    async (profesor: string, thunkAPI) => {
      try {
        const response = await axios.get(`${API_URL}/${profesor}`);
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue('Error al buscar datos');
      }
    }
  );