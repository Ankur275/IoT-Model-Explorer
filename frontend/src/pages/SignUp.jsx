import {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e) => { 
        e.preventDefault();

        if (password !== confirmPassword) {
            setMessage('Passwords do not match');
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/users/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({username, email, password, confirmPassword}),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("SignUp Successsful!!");
            navigate('/login');
        }
        
        else {
            setMessage(data.message);

        }
    }
    catch (error) {
        console.error("Error signing up:", error);
        setMessage("SignUp Failed!!!")
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
                    Hello User!!!
                </h2>
                <p className="mt-4 text-center text-white">Register yourself to continue</p>
                <form onSubmit={handleSignUp} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="name">Username</label>
                            <input
                                placeholder="Username"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                autoComplete="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                />
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="email">Email Address</label>
                            <input
                                placeholder="Email address"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                autoComplete="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="password">Password</label>
                            <input
                                placeholder="Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <label className="sr-only" htmlFor="password">Confirm Password</label>
                            <input
                                placeholder="Confirm Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                {message && <p className="mt-4 text-center text-red-500 font-semibold text-xl">{message}</p>}
            </div>
            <div className="px-8 py-4 bg-white/ backdrop-blur-xl text-center">
                <span className="text-white">Already have an account? </span>
                <NavLink className="font-medium text-blue-500
                hover:text-blue-600" to="/login"
                >Sign in</NavLink>
            </div>
        </div>
    </div>
    </div>

)};

export default SignUp;
