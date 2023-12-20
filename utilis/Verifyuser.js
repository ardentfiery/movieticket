import { getCookie } from "cookies-next";
import axios from "axios";
const verifyUser = async () => {
    const storeCookie = getCookie("token"); // => 'value'
    if (storeCookie === undefined || storeCookie.trim() === "") {
        return false;
    } else {
        try {
            const reponse = await axios.get(
                "http://172.16.1.161:5000/verifytokenuser",
                {
                    headers: {
                        authorization: `Bearer ${storeCookie}`,
                    },
                }
            );
            console.log("token is verified");
            return true;
        } catch (error) {
            console.log("token not verified");
            console.log(error);
            return false;
        }
    }
};

export default verifyUser;
