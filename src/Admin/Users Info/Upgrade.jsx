import React, { useEffect, useState } from 'react'
import BackButton from '../../Components/BackButton'
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
export default function Upgrade() {
    const data = useLocation().state;
    const roles = ["User", "Admin"]
    const [role, setRole] = useState(data.role);
    const [user, setUser] = useState(data.user);
    const navigate = useNavigate();
    const UpgradeUser = async (e) => {
        e.preventDefault();
        if (user === window.localStorage.getItem("email")) {
            document.getElementById("error").innerHTML = "You can't update your self";
        } else {
            const response = await axios.post("http://localhost:8080/upgrade", {
                name: user,
                role: role,
            })
            if (response.data === "Updated") {
                alert("🥳")
                navigate(-1);
                window.location.href="/admin/users"
            } else {
                document.getElementById("error").innerHTML = response.data;
            }
        }
    }
    return (
        <div className='flex flex-wrap justify-center m-5 mt-20 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" onSubmit={UpgradeUser}>
                    <div className='flex justify-between'>
                        <BackButton />
                        <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Upgrade User</h5>
                    </div>
                    <h4 id='error' className='text-red-400'></h4>
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                        <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-not-allowed" placeholder="username" required value={user} onChange={e => setUser(e.target.value)} disabled />
                    </div>
                    <div>
                        <label for="roles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Role</label>
                        <select id="roles" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setRole(e.target.value)}>
                            <option selected disabled className='cursor-not-allowed'>{role}</option>
                            {
                                roles.map(r => (
                                    <option value={r}>{r}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Upgrade</button>
                </form>
            </div>
        </div>
    )
}
