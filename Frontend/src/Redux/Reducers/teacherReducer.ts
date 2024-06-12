import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course, Teacher, Tutorship, } from '../../config/api';


interface TeacherState {
    teacher: Teacher | null
    tutorships: Tutorship[];
    courses: Course[];
};

const initialState: TeacherState = {
    teacher: null,
    tutorships: [],
    courses: []
};


const teacherSlice = createSlice({
    name: 'teacher',
    initialState,
    reducers: {
        setTeacherData: (state, {payload}: PayloadAction<{teacher: Teacher; courses: Course[]; tutorships: Tutorship[]}>) => {
            state.teacher = payload.teacher;
            state.tutorships = payload.tutorships;
            state.courses = payload.courses;
        }
    },
});

export const { setTeacherData} = teacherSlice.actions;

export default teacherSlice.reducer;
