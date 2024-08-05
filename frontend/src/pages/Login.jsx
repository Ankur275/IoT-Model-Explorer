import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({email, password}),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Login Successful!!");
            navigate('/home');
        }
        else {
            setMessage(data.message || 
                "Invalid password or email.");
        }
    }
    catch (error) {
        console.error("Error logging in:", error);
        setMessage("Login Failed");
    }
};

return (

    <div className= 'h-screen bg-cover bg-no-repeat bg-center bg-fixed'
    style={{backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}}>
    <div className="max-w-lg m-auto pt-44 font-sans">
        <div
            className="bg-white/ backdrop-blur-xl rounded-lg shadow-xl overflow-hidden"
            
        >
            <div className="p-8">
                <h2 className="text-center text-3xl font-extrabold text-white">
                    Welcome Back
                </h2>
                <p className="mt-4 text-center text-white">Sign in to continue</p>
                <form onSubmit={handleLogin} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <label className="sr-only" htmlFor="email">Email address</label>
                            <input
                                placeholder="Email address"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                autoComplete="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                autoComplete="current-password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center">
                            <input
                                className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-gray-600 rounded"
                                type="checkbox"
                                name="remember-me"
                                id="remember-me" />
                            <label className="ml-2 block text-sm text-white" htmlFor="remember-me"
                            >Remember me</label>
                        </div>

                        <div className="text-sm">
                            <NavLink
                                className="font-medium text-blue-500
                                hover:text-blue-600"
                                to="/forgot-password"
                                
                            >
                                Forgot your password?
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            Sign In
                        </button>
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-red-500 font-semibold text-xl">{message}</p>}
            </div>
            <div className="px-8 py-4 bg-white/ backdrop-blur-xl text-center">
                <span className="text-white">Dont have an account? </span>
                <NavLink className="font-medium text-blue-500
                hover:text-blue-600" to="/signup"
                >Sign up</NavLink>
            </div>
        </div>
    </div>
    </div>
)};

export default Login;
