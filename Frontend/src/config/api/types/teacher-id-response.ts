export interface TeacherByIDResponse {
    teacher:    Teacher;
    tutorships: Tutorship[];
    courses:    Course[];
}

export interface Course {
    courseId:    string;
    course:      string;
    gradeId:     string;
    grade:       string;
    section:     Section;
    school_year: number;
}

export enum Section {
    A = "A",
    B = "B",
}

export interface Teacher {
    id:        string;
    name:      string;
    last_name: string;
    email:     string;
    dni:       string;
    birthdate: null;
    role:      string;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Tutorship {
    grade:       string;
    section:     Section;
    school_year: number;
}
