import { useAppDispatch } from "../Redux/hooks";
import { AuthSuccessResponse, MiCampusApi } from "../config/api";
import { authenticated } from "../Redux/auth";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const starLogin = async (credentials: { email: string; password: string }) => {
        try {
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
            console.log(error);
        }
    };

    return {
        starLogin
    };
}
