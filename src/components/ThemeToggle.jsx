import React, { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState('dark');

    const handleToggle = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };


    return (
        <div className="flex items-center ml-12 mt-2">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isDarkMode} onChange={handleToggle} className="sr-only" />
                <div className="w-12 h-6 bg-gray-300 rounded-full transition duration-300 ease-in-out">
                    <span className={`absolute left-0 w-6 h-6 bg-white rounded-full transition-transform duration-300 ease-in-out flex items-center justify-center ${isDarkMode ? 'translate-x-full bg-gray-800' : ''}`}>
                        {isDarkMode ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-gray-800" />}
                    </span>
                </div>
            </label>
        </div>
    );
};

export default ThemeToggle;
