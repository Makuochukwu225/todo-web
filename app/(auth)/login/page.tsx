"use client"
import useAuth from '@/hooks/useAuth';
import { useState } from 'react';

function Login() {
    const { login, loading, error, response } = useAuth();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const loginUser = () => {
        login(email, password);
    }
    return (
        <div className='min-h-screen flex flex-col items-center justify-center'>
            <div className='flex flex-col gap-2'>

                <input type="email"
                    className='text-black'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}

                />

                <input type="password"
                    className='text-black'
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}

                />

                <button
                    disabled={loading}
                    onClick={loginUser}
                    className='bg-blue-600 rounded-lg'
                >
                    {loading ? "Loading" : "Login"}
                </button>

                <div>
                    {error && <div className='text-red-500'>{error}</div>}
                    {response && <div className='text-green-500'>Logged in successfully!</div>}
                    {response && <div>{response.user.fullName}</div>}
                </div>
            </div>
        </div>
    )
}

export default Login