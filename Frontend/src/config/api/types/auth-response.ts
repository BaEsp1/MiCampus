export interface AuthSuccessResponse {
    user:  User;
    token: string;
}

export interface User {
    id:        string;
    name:      string;
    last_name: string;
    email:     string;
    birthdate: null;
    dni:       string;
    role:      'STUDENT' | 'TEACHER';
    id_grade:  null;
    isActive:  boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface AuthBadResponse {
    message:    string;
    error:      string;
    statusCode: number;
}
