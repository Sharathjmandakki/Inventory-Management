import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Me() {
    const user = window.localStorage.getItem("email");
    const navigate = useNavigate();
    const logout = () => {
        window.localStorage.clear()
        // navigate("/login", { replace: true })
        window.location.href = "/login"
    }
    // const update = (e) => {
    //     e.preventDefault();
    //     window.location.href="*/update"
    // }

    return (
        <div className='flex flex-wrap justify-center m-5 mt-20 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6">
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                        <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-not-allowed" placeholder="username" disabled value={user} />
                    </div>
                    <div>
                        <Link to="update">
                            <button class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                        </Link>
                    </div>
                    <button onClick={() => logout()} type="submit" class="w-full text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-400 dark:hover:bg-red-300 dark:focus:ring-red-500">Logout</button>
                </form>
            </div>
        </div>
    )
}
