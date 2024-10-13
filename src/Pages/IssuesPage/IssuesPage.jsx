import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, Trash, ArrowUp, Calendar } from 'lucide-react';
import { Switch } from '@mui/material';


const IssuesPage = ({ handleLogout }) => {
    const [selectedUser, setSelectedUser] = useState('');
    const [selectedRole, setSelectedRole] = useState('');
    const [tableData, setTableData] = useState([]);
    const users = [
        { id: 1, name: 'John', email: 'John@gmail.com', phone: '+1 929 1234' },
        { id: 2, name: 'Jacob', email: 'Jacob@gmail.com', phone: '+1 929 5678' },
        { id: 3, name: 'Jennifer', email: 'Jennifer.doe@gmail.com', phone: '+1 929 9101' },

    ];
    const [electricalChecked, setElectricalChecked] = useState(false);
    const [hubChecked, setHubChecked] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        priority: '',
        dcSwitchStatus: '',
        status: '',
        description: '',
        repairDate: '',
        timeEstimate: ''
    });

    const handleElectricalChange = (e) => setElectricalChecked(e.target.checked);
    const handleHubChange = (e) => setHubChecked(e.target.checked);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('formData', JSON.stringify(formData));
        sessionStorage.setItem('electricalChecked', JSON.stringify(electricalChecked));
        sessionStorage.setItem('hubChecked', JSON.stringify(hubChecked));
        alert('Data saved successfully!');
        setFormData({
            title: '',
            priority: '',
            dcSwitchStatus: '',
            status: '',
            description: '',
            repairDate: '',
            timeEstimate: '',
        });
        setElectricalChecked(false);
        setHubChecked(false);
    };

    const handleRoleChange = (e) => {
        setSelectedRole(e.target.value);
    };


    const handleUserChange = (e) => {
        setSelectedUser(e.target.value);
    };

    const handleAssign = () => {
        if (selectedUser && selectedRole) {
            const user = users.find((u) => u.id.toString() === selectedUser);
            if (user) {
                setTableData((prevData) => [
                    ...prevData,
                    { ...user, role: selectedRole },
                ]);
                setSelectedUser('');
                setSelectedRole('');
            }
        }
    };
    const handleDelete = (id) => {
        setTableData((prevData) => prevData.filter((item) => item.id !== id));
    };
    return (
        <>
            <div className="flex flex-row-reverse mr-64 gap-5 mb-10">
                <button type='submit' onClick={handleSubmit} className="bg-gradient-to-b font-bold from-red-500 to-orange-500 text-white rounded-3xl px-4 py-2 hover:from-red-600 hover:to-orange-600">
                    Save Changes
                </button>
                <button onClick={handleLogout} className="bg-white font-bold text-orange-500 border border-orange-500 rounded-3xl px-4 py-2 hover:bg-orange-50">
                    Log Out
                </button>
            </div>

            <div className="bg-gray-50 min-h-screen p-8">
                <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-6">
                    <div className="text-sm text-black-300 mb-6">
                        <h2 className="text-lg font-semibold text-red-600 mb-4">Issue Contact</h2>
                        Last updated on 09.08.2022 04:53 pm
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-5 gap-10 mb-6">
                            <div>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                        className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    />
                                    <label
                                        htmlFor="title"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Title
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <select
                                        id="priority"
                                        value={formData.priority}
                                        onChange={handleInputChange}
                                        className="peer w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    >
                                        <option value="" disabled selected hidden></option>
                                        <option>high</option>
                                        <option>medium</option>
                                        <option>low</option>
                                    </select>
                                    <label
                                        htmlFor="priority"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Priority
                                    </label>
                                    <ChevronDown className="absolute right-3 top-3 text-black-400" size={16} />
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <select
                                        id="dcSwitchStatus"
                                        value={formData.dcSwitchStatus}
                                        onChange={handleInputChange}
                                        className="peer  w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    >
                                        <option value="" disabled selected hidden></option>
                                        <option >On</option>
                                        <option>Off</option>
                                    </select>
                                    <label
                                        htmlFor="dcSwitchStatus"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        DC Switch Status
                                    </label>
                                    <ChevronDown className="absolute right-3 top-3 text-black-400" size={16} />
                                </div>
                            </div>
                            <div>
                                <div className="relative">
                                    <select
                                        id="status"
                                        value={formData.status}
                                        onChange={handleInputChange}
                                        className="peer w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    >
                                        <option value="" disabled selected hidden></option>
                                        <option>Active</option>
                                        <option>Inactive</option>
                                    </select>
                                    <label
                                        htmlFor="status"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Status
                                    </label>
                                    <ChevronDown className="absolute right-3 top-3 text-black-400" size={16} />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <label className="flex items-center cursor-pointer">
                                    <Switch
                                        checked={electricalChecked}
                                        onChange={handleElectricalChange}
                                    />

                                    <span className="text-sm font-medium text-gray-700">Electrical</span>
                                </label>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-10 mb-6">
                            <div className="col-span-2">
                                <div className="relative">
                                    <button
                                        type="button"
                                        className="absolute top-2 right-2 p-1 text-gray-600 hover:text-orange-400 transition-colors duration-200"
                                        aria-label="Copy description"
                                    >
                                        <Calendar size={20} />
                                    </button>

                                    <textarea
                                        id="description"
                                        value={formData.description}
                                        onChange={handleInputChange}
                                        className="peer w-full border border-gray-300 rounded-md px-3 py-2 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        required
                                    ></textarea>
                                    <label
                                        htmlFor="description"
                                        className="absolute left-3 -top-2.5 text-sm text-gray-600 transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Description
                                    </label>
                                </div>
                            </div>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="repairDate"
                                    value={formData.repairDate}
                                    onChange={handleInputChange}
                                    className="peer w-full border border-gray-300 rounded-md px-3 py-2 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                    required
                                />
                                <label
                                    htmlFor="repairDate"
                                    className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all duration-200 transform peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                >
                                    Repair Date
                                </label>
                            </div>

                            <div>
                                <div className="relative">
                                    <input
                                        type="number"
                                        id="timeEstimate"
                                        value={formData.timeEstimate}
                                        onChange={handleInputChange}
                                        className="peer w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        required
                                    />
                                    <label
                                        htmlFor="timeEstimate"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all duration-200 transform peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Time Estimate Hours
                                    </label>
                                </div>
                            </div>
                            <div className="">
                                <label className="flex items-center cursor-pointer">
                                    <Switch
                                        checked={hubChecked}
                                        onChange={handleHubChange}
                                    />
                                    <span className="text-sm font-medium text-gray-700">Hub</span>
                                </label>
                            </div>
                        </div>
                    </form>

                    <div>
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-red-600 mb-4">Issue Contact</h2>
                            <div className="grid grid-cols-5 gap-10 mb-4 items-end">
                                <div className="col-span-2 relative">
                                    <select
                                        id="selectUser"
                                        className="peer  w-full border border-gray-300 rounded-md px-2 py-1 pt-5 appearance-none focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        value={selectedUser}
                                        onChange={handleUserChange}
                                    >
                                        <option value="" disabled hidden>
                                            {/* Select User */}
                                        </option>
                                        {users.map((user) => (
                                            <option
                                                key={user.id}
                                                value={user.id}
                                                className="bg-white hover:bg-orange-400 hover:text-white"
                                            >
                                                {user.name}
                                            </option>
                                        ))}
                                    </select>
                                    <label
                                        htmlFor="selectUser"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Select User
                                    </label>
                                    <ChevronDown className="absolute right-3 top-3 text-black-400" size={16} />
                                </div>


                                <div className="col-span-2 relative">
                                    <select
                                        id="selectRole"
                                        className="peer w-full border border-gray-300 rounded-md px-2 py-1 pt-5 appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
                                        value={selectedRole}
                                        onChange={handleRoleChange}
                                    >
                                        <option value="" disabled hidden>
                                            {/* Select Role */}
                                        </option>
                                        <option
                                            value="Admin"
                                            className="bg-white hover:bg-orange-400 hover:text-white"
                                        >
                                            Admin
                                        </option>
                                        <option
                                            value="Standard User"
                                            className="bg-white hover:bg-orange-400 hover:text-white"
                                        >
                                            Standard User
                                        </option>
                                    </select>

                                    <label
                                        htmlFor="selectRole"
                                        className="absolute left-3 -top-2.5 text-sm text-black-300 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-gray-600 bg-white px-1"
                                    >
                                        Select Role
                                    </label>
                                    <ChevronDown className="absolute right-3 top-3 text-black-400" size={16} />
                                </div>

                                <button
                                    onClick={handleAssign}
                                    className="py-2 bg-gradient-to-b from-red-500 to-orange-400 text-white rounded-full hover:from-red-600 hover:to-orange-500 transition duration-300 self-end"
                                >
                                    Assign
                                </button>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="border-t border-gray-200 pt-6">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-left text-sm font-medium text-black-300">
                                        <th className="pb-2">
                                            <input
                                                type="checkbox"
                                                id="keepLoggedIn"
                                                className="custom-checkbox"

                                            />
                                        </th>
                                        <th className="pb-2">
                                            Name <ArrowUp className="inline-block w-4 h-4 text-gray-400 ml-1" />
                                        </th>
                                        <th className="pb-2">
                                            Email <ArrowUp className="inline-block w-4 h-4 text-gray-400 ml-1" />
                                        </th>
                                        <th className="pb-2">
                                            Phone <ArrowUp className="inline-block w-4 h-4 text-gray-400 ml-1" />
                                        </th>
                                        <th className="pb-2">
                                            Role <ArrowUp className="inline-block w-4 h-4 text-gray-400 ml-1" />
                                        </th>
                                        <th className="pb-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((data, index) => (
                                        <tr key={index} className={`border-t border-gray-100 ${index === 0 ? 'bg-gray-100' : ''}`}>
                                            <td className="py-2">
                                                <input
                                                    type="checkbox"
                                                    id="keepLoggedIn"
                                                    className="custom-checkbox "

                                                />
                                            </td>
                                            <td className="py-2">{data.name}</td>
                                            <td className="py-2">{data.email}</td>
                                            <td className="py-2">{data.phone}</td>
                                            <td className="py-2">{data.role}</td>
                                            <td className="py-2 text-right">
                                                <Trash
                                                    className="text-orange-400 cursor-pointer"
                                                    onClick={() => handleDelete(data.id)}
                                                />

                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="flex justify-end text-sm gap-5 mt-2 text-black-300">
                        <div className="flex items-center space-x-2">
                            <span>Rows per page:</span>
                            <select className=" px-1 py-1">
                                <option disabled>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-10">
                            <span>1-1 of 2</span>
                            <button className="p-1"><ChevronLeft size={16} color='#FF8C00' /></button>
                            <button className="p-1"><ChevronRight size={16} color='#FF8C00' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default IssuesPage;
