import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { AuthSuccessResponse, MiCampusApi } from "../config/api";
import { authenticated, checkingAuth, clearErrorMessage, notAuthenticated } from "../Redux/auth";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

export const useAuthStore = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isLoading, isLogged, errorMessage} = useAppSelector(state => state.auth);

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

    return {
        isLoading,
        isLogged,
        errorMessage,

        startLogin,
    }
}

