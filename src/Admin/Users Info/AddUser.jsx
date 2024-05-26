import React, { useState } from 'react'
import BackButton from '../../Components/BackButton';
import axios from 'axios';
export default function AddUser() {    
    const roles = ["User", "Admin"]
    const [role, setRole] = useState("User");
    const [password, setPassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [email, setEmail] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [username, setUserName] = useState("");
    const registerUser = async (e) => {
        e.preventDefault();
        if (password !== cpassword) {
            document.getElementById("error").innerHTML="Password mismatch";
        } else {
            const response=await axios.post("http://localhost:8080/register",{
                name:username,
                email:email,
                password:password,
                mobileNo:mobileno,
                role:role
            })
            if(response.data==="registered"){
                alert("🥳")
                window.location.href = "/admin"
            }else{
                document.getElementById("error").innerHTML=response.data;
            }
        }
    }
    return (
        <div className='flex flex-wrap justify-center m-5 mt-20 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" onSubmit={registerUser}>
                    <div className='flex justify-between'>
                        <BackButton />
                        <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Add new User</h5>
                    </div>
                    <h4 id='error' className='text-red-400'></h4>
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User username</label>
                        <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required value={username} onChange={e=>{setUserName(e.target.value)}} />
                    </div>
                    <div>
                        <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User mobile number</label>
                        <input type="text" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="4445544455" required  value={mobileno} onChange={e=>{setMobileno(e.target.value)}}/>
                    </div>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
                    </div>
                    <div>
                        <label for="roles" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Role</label>
                        <select id="roles" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={e => setRole(e.target.value)}>
                            {
                                roles.map(r => (
                                    <option value={r}>{r}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={password} onChange={e => { setPassword(e.target.value) }} />
                    </div>
                    <div>
                        <label for="cpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter User password</label>
                        <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={cpassword} onChange={e => { setCpassword(e.target.value) }} />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save User</button>
                </form>
            </div>
        </div>
    )
}
