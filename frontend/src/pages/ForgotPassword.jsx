import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleReset = async (e) => {
        e.preventDefault();

        if (newPassword !== confirmNewPassword) {
            setMessage("Passwords do not match");
            return;
        }

        try {
            const response = await fetch('http://localhost:4000/api/users/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({newPassword, confirmNewPassword}),
        });

        const data = await response.json();
        if (response.ok) {
            setMessage("Password reset Successful!!");
            navigate('/login');
        }
        
        else {
            setMessage(data.message);

        }
    }
    catch (error) {
        console.error("Error reseting password:", error);
        setMessage("Password reset Failed!!!")
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
                <h2 className="text-center text-3xl font-extrabold text-white ">
                    Reset Your Password
                </h2>
                <p className="mt-4 text-center text-white">Be Creative. Set a password that is easy to remember and hard to guess</p>
                <form onSubmit={handleReset} className="mt-8 space-y-6">
                    <div className="rounded-md shadow-sm">
                        <div>
                            <input
                                placeholder="New Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}/>
                        </div>
                        <div className="mt-4">
                            <input
                                placeholder="Confirm Password"
                                className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                required="true"
                                type="password"
                                value={confirmNewPassword}
                                onChange={(e) => setConfirmNewPassword(e.target.value)}/>
                        </div>
                    </div>

                    <div>
                        <button
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-blue-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            type="submit"
                        >
                            Set Password
                        </button>
                    </div>
                </form>
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
    )
};

export default ForgetPassword;
