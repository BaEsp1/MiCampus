export interface TeacherByIDResponse {
    teacher: Teacher;
    tutorships: Tutoship[];
    courses: Course[];
}

export interface Course {
    course: string;
    grade: string;
    section: string;
    school_year: number;
}

export interface Tutoship {
    grade: string;
    section: string;
    school_year: number;
}

export interface Teacher {
    id: string;
    name: string;
    last_name: string;
    email: string;
    dni: string;
    birthdate: null;
    role: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
