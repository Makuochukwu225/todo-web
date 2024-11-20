import { BASEURL } from "@/constants";
import { LoginResponse } from "@/types/loginTypes";
import { useState } from "react";
import Cookies from 'js-cookie';

// axios
const useAuth = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [response, setResponse] = useState<LoginResponse | null>(null);

    const login = async (email: string, password: string) => {
        setLoading(true);
        const loginData = {
            email,
            password,
        }

        try {
            const res = await fetch(`${BASEURL}api/v1/user/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await res.json();
            if (!res.ok) {
                return new Error(data.message || "Error logining in");
            }
            setResponse(data);
            Cookies.set("token", response?.token!)
            console.log(data);



        } catch (error: any) {
            console.log(error);
            console.log(error.message);

            setError(error.message);
            setResponse(null)
        } finally {
            setLoading(false);
        }
    }





    return { login, loading, error, response };

}

export default useAuth;