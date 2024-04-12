import { useDispatch } from "react-redux";
import { getLoginUser } from "../services/user.services";
import { GET_LOGIN_USER } from "../redux/features/userLoginSlice";

const useGetLoginUser = async (id: number) => {
    const dispatch = useDispatch();
    const userData = await getLoginUser(id);
    dispatch(GET_LOGIN_USER(userData));
};

export default useGetLoginUser;
