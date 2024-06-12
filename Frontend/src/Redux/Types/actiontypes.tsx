export interface User {
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

export interface GradeData {
    tutor: string;
    grade: string;
    section: string;
    school_year: number;
}

export interface ResponseData {
    grade: GradeData;
    notas: string[];
    materias: GradeDetail;
}

export interface GradesResponse {
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

export interface GradeDetail {
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

export interface Teacher {
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