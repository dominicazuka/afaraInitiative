import { getErrorMessage } from "../../utils";
import Axios from "../../config";


export const registerUser = async (body) => {
    try {
        const { data } = await Axios.post("/users/register", body);

        return { error: false, data, msg: "Registration Successful" };
    } catch (error) {
        return { error: true, data: {}, msg: getErrorMessage(error) };
    }
};