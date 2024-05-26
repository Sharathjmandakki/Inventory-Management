import React, { useState } from 'react'
import BackButton from './BackButton'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function GetUser() {
    const navigate=useNavigate();
    const [email,setEmail]=useState("");
    const validate=async(e)=>{
        e.preventDefault();
        const response=await axios.post("http://localhost:8080/getuser",{email:email,username:email})
        if(response.data!==null || response!==undefined){
            navigate("/updatepass",{state:response.data})
        }else{
            document.getElementById("error").innerHTML="email dosent exist please create a account";
        }
    }
    return (
        <div className='flex flex-wrap justify-center m-5 mt-32 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" onSubmit={validate}>
                    <div className='flex justify-between'>
                        <BackButton />
                        <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Validate email</h5>
                    </div>
                    <h4 id='error' className='text-red-400'></h4>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required value={email} onChange={e=>{setEmail(e.target.value)}} />
                    </div>
                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">validate</button>
                </form>
            </div>
        </div>
    )
}
