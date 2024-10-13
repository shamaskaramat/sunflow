import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ListChecks, Info, CalendarCheck, Map, Calendar, ClipboardList, Users, Settings, Moon, Gauge } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Sidebar = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative transition-all duration-300 ${isHovered ? 'w-64' : 'w-16'} bg-white h-screen border-r border-gray-200`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="py-3 px-4 bg-gradient-to-b from-red-500 to-orange-500 text-white font-semibold flex items-center">
                <Gauge className="mr-4" color="#FFFFFF" />
                {isHovered && <span>Dashboard</span>}
            </div>

            <nav className="mt-2">
                <SidebarItem icon={ListChecks} text="Projects" to="/projects" isHovered={isHovered} />
                <SidebarItem icon={Info} text="Issues" to="/issues" isHovered={isHovered} />
                <SidebarItem icon={Map} text="Map" to="/map" isHovered={isHovered} />

                <SidebarGroup icon={Calendar} text="Planning" isHovered={isHovered}>
                    <SidebarSubItem text="Gantt chart" to="/planning/gantt-chart" isHovered={isHovered} />
                    <SidebarSubItem text="Calendar" to="/planning/calendar" isHovered={isHovered} />
                </SidebarGroup>

                <SidebarGroup icon={ClipboardList} text="Checklists" isHovered={isHovered}>
                    <SidebarSubItem text="Checklists" to="/checklists" isHovered={isHovered} />
                    <SidebarSubItem text="Create checklists" to="/checklists/create" isHovered={isHovered} />
                </SidebarGroup>

                <SidebarGroup icon={Users} text="Resources" isHovered={isHovered}>
                    <SidebarSubItem text="Teams" to="/resources/teams" isHovered={isHovered} />
                    <SidebarSubItem text="Employees" to="/resources/employees" isHovered={isHovered} />
                </SidebarGroup>

                <SidebarGroup icon={Settings} text="Settings" isHovered={isHovered}>
                    <SidebarSubItem text="Partner settings" to="/settings/partners" isHovered={isHovered} />
                    <SidebarSubItem text="Email settings" to="/settings/email" isHovered={isHovered} />
                    <SidebarSubItem text="Users" to="/settings/users" isHovered={isHovered} />
                    <SidebarSubItem text="Product settings" to="/settings/products" isHovered={isHovered} />
                </SidebarGroup>

                <div>
                    <SidebarItem icon={Moon} text="Appearance" to="/appearance" isHovered={isHovered} />
                    {isHovered && <ThemeToggle />}
                </div>
                <SidebarItem icon={CalendarCheck} text="Offer" to="/calendar-check" isHovered={isHovered} />
            </nav>
        </div>
    );
};

const SidebarItem = ({ icon: Icon, text, to, isHovered }) => {
    return (
        <Link
            to={to}
            className={`py-3 px-4 flex items-center space-x-3 hover:bg-gradient-to-b from-red-100 to-orange-100`}
        >
            <div className="flex-shrink-0 w-6 h-6">
                <Icon color="#FF5722" />
            </div>
            {isHovered && <span className="text-sm">{text}</span>}
        </Link>
    );
};

const SidebarGroup = ({ icon: Icon, text, children, isHovered }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="py-3 px-4 flex items-center space-x-3 cursor-pointer hover:bg-gradient-to-b from-red-100 to-orange-100"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="flex-shrink-0 w-6 h-6">
                    <Icon color="#FF5722" />
                </div>
                {isHovered && <span className="text-sm">{text}</span>}
            </div>
            {isOpen && (
                <div className="flex flex-col pl-6">
                    {children}
                </div>
            )}
            <div className="h-px bg-gray-100" />
        </>
    );
};

const SidebarSubItem = ({ text, to, isHovered }) => {
    return (
        <Link to={to} className="py-2 pl-8 pr-4 flex items-center hover:bg-gradient-to-b from-red-100 to-orange-100">
            {isHovered && <span className="text-xs text-black-100">{text}</span>}
        </Link>
    );
};

export default Sidebar;
