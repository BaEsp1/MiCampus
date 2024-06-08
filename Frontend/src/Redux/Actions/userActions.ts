import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface User {
    name: string;
    last_name: string;
    email: string;
    dni: string;
    birthdate: string;
    materias: string[];
    representante: {
        relacion: string;
        name: string;
        telefono: string;
        correoElectronico: string;
    };
}

interface GradeData {
    tutor: string;
    grade: string;
    section: string;
    school_year: number;
}

interface ResponseData {
    grade: GradeData;
    notas: string[];
    materias: GradeDetail;
}

interface GradesResponse {
    totalGrades: number;
    page: number;
    totalPages: number;
    next: string | null;
    prev: string | null;
    grades: {
        id: string;
        grade: string;
        section: string;
        school_year: number;
        tutorId: string;
        createdAt: string;
        updatedAt: string;
    }[];
}

interface GradeDetail {
    id: string;
    grade: string;
    section: string;
    year: number;
    tutor: {
        id: string;
        name: string;
        last_name: string;
        email: string;
    };
    courses: {
        id: string;
        name: string;
        idTeacher: string;
    }[];
    students: {
        id: string;
        name: string;
        last_name: string;
        email: string;
    }[];
}

interface Teacher {
    id: string;
    name: string;
    last_name: string;
    email: string;
    birthdate: string | null;
    dni: string;
    role: string;
    gradeId: string | null;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

const API_URL = 'https://nest-institucion-educativa.onrender.com/api';

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
            console.log(response.data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al buscar datos');
        }
    }
);

export const loadGrade = createAsyncThunk(
    'user/loadGrade',
    async (userId: string, thunkAPI) => {
        try {
            const response = await axios.get<ResponseData>(`${API_URL}/students/${userId}`);
            const { grade } = response.data;

            const gradesResponse = await axios.get<GradesResponse>(`${API_URL}/grades`);
            const grades = gradesResponse.data.grades;
            const matchingGrade = grades.find(g => g.grade === grade.grade && g.section === grade.section);

            if (!matchingGrade) {
                throw new Error('Grado no encontrado');
            }

            const gradeDetailResponse = await axios.get<GradeDetail>(`${API_URL}/grades/${matchingGrade.id}`);
            const materias = gradeDetailResponse.data.courses;

            const allteachers = await axios.get<{ teachers: Teacher[] }>(`${API_URL}/teachers`);
            const profesores = allteachers.data.teachers;

            return {
                notas: response.data.notas,
                grade: grade,
                materias: materias,
                profesores:profesores,
            };
        } catch (error) {
            return thunkAPI.rejectWithValue('Error al buscar datos');
        }
    }
);

export const searchMaterias = (results: { id: string; name: string; idTeacher: string }[] | null) => {
    return {
        type: 'user/searchMaterias',
        payload: results
    };
};
