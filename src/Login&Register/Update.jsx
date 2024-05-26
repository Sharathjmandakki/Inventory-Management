import React, { useEffect, useState } from 'react'
import BackButton from '../Components/BackButton'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Update() {
    const [user,setUser]=useState([]);
    const [mobileno, setMobileno] = useState(user.mobileNo);
    const [username, setUserName] = useState(user.username)
    const [email, setEmail] = useState(user.email);
    const [role, setRole] = useState(user.roal);
    const data = window.localStorage.getItem("email")
    const navigate=useNavigate();
    useEffect(() => {
        async function fetch() {
            const response = await axios.post("http://localhost:8080/getuser", {
                email: data,
            })
            if (response !== undefined || response !== null) {
                setEmail(response.data.email);
                setUserName(response.data.name);
                setMobileno(response.data.mobileNo)
                setUser(response.data)
            }
        }
        fetch()
    }, [])
    const updateUser = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:8080/update", {
            name: username,
            // ||user.username,
            email: email,
            mobileNo: mobileno,
            role:role,
        })
        if (response.data === "Updated") {
            alert("🥳")
            // window.localStorage.clear();
            // navigate("/login",{replace:true})
        } else {
            document.getElementById("error").innerHTML = response.data;
        }
    }
    return (
        <div className='flex flex-wrap justify-center m-5 mt-20 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" onSubmit={updateUser}>
                    <div className='flex justify-between'>
                        <BackButton />
                        <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Update Page</h5>
                    </div>
                    <h4 id='error' className='text-red-400'></h4>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-not-allowed" placeholder="name@company.com" required value={email} disabled onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label for="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your username</label>
                        <input type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="username" required value={username} onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div>
                        <label for="mobile" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your mobile number</label>
                        <input type="text" name="mobile" id="mobile" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="4445544455" required value={mobileno} onChange={e => { setMobileno(e.target.value) }} />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update your account</button>
                </form>
            </div>
        </div>
    )
}
