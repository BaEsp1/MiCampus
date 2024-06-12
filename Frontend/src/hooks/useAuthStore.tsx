import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { AuthSuccessResponse, MiCampusApi, TeacherByIDResponse, User } from "../config/api";
import { authenticated, checkingAuth, clearErrorMessage, notAuthenticated } from "../Redux/auth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import { clearUserData, setUserData } from "../Redux/Reducers/userReducer";
import { setTeacherData } from "../Redux/Reducers/teacherReducer";

export const useAuthStore = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { isLoading, isLogged, errorMessage } = useAppSelector(state => state.auth);

    const checkAuthToken = () => {
        const token = localStorage.getItem('x-token');
        const user: User = JSON.parse(localStorage.getItem('user') ?? '{}');

        if (token && user.id) {
            localStorage.setItem('x-token', token);
            localStorage.setItem('user', JSON.stringify(user));

            dispatch(setUserData(user));
            dispatch(authenticated());
            navigate('/user')
        }
    }

    const startLogin = async (credentials: {
        email: string;
        password: string
    }) => {
        try {
            dispatch(checkingAuth());
            const { data } = await MiCampusApi.post<AuthSuccessResponse>(
                '/auth/login',
                credentials,
            );

            const { token, user } = data;
            localStorage.setItem('x-token', token);
            localStorage.setItem('user', JSON.stringify(user));

            if (user.role === 'TEACHER') {
                const { data } = await MiCampusApi.get<TeacherByIDResponse>(`/teachers/${user?.id}`)
                dispatch(
                    setTeacherData({
                        teacher: data.teacher,
                        tutorships: data.tutorships,
                        courses: data.courses,
                    })
                );
            }

            dispatch(setUserData(user));
            dispatch(authenticated());
            navigate('/user');

        } catch (error) {
            if (error instanceof AxiosError) {
                dispatch(notAuthenticated('Error de credenciales'));
            }
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 3000);
        }
    }

    const startLogout = () => {
        dispatch(clearUserData());
        dispatch(notAuthenticated(''));
        navigate('/');
    }

    return {
        isLoading,
        isLogged,
        errorMessage,

        startLogin,
        startLogout,
        checkAuthToken
    }
}

