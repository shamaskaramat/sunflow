import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import logo from "../../assets/images/logo.png";
import loginimage from '../../assets/images/login.png';

const Login = ({ onLogin }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'shams' && password === '1234') {
            onLogin();
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="flex h-screen bg-white">
            <div className="flex flex-col w-full lg:w-1/2 justify-center px-8 lg:px-16">
                <div className="flex justify-center mb-20">
                    <img src={logo} alt="Sunflow logo" className="h-12" />
                </div>
                <div className="max-w-md mx-auto h-1/2">
                    <h2 className="text-xl font-semibold mb-6 text-center">Log in to your account</h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4 relative">
                            <User className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Username"
                                className="w-full px-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                        </div>
                        <div className="mb-4 relative">
                            <Lock className="absolute top-3 left-3 text-gray-400 w-5 h-5" />
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className="w-full px-10 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute top-3 right-3 text-gray-400"
                            >
                                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                            </button>
                        </div>
                        <div className="mb-4 ml-3 flex items-center mt-5">
                            <input
                                type="checkbox"
                                id="keepLoggedIn"
                                className="rounded custom-checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label htmlFor="keepLoggedIn" className="text-xs ml-2 text-black-600">Keep me logged in</label>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-b from-red-500 to-orange-400 text-white py-2 rounded-full hover:from-red-600 hover:to-orange-500 transition duration-300"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 bg-white">
                <div className="flex items-center justify-center h-full">
                    <img src={loginimage} alt="Illustration" className="h-auto max-w" />
                </div>
            </div>
        </div>
    );
};

export default Login;
