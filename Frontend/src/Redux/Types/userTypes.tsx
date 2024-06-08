export interface ProfesorData {
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

export interface GradeData {
    tutor: string;
    grade: string;
    section: string;
    school_year: number;
}

export interface Course {
    id: string;
    name: string;
    idTeacher: string;
}

export interface ResponseData {
    grade: GradeData;
    notas: string[];
    materias: Course[];
    profesores: ProfesorData[];
}

export interface Nota {
    course: string;
    capacity: string | null;
    competence: string;
    note: number;
}

