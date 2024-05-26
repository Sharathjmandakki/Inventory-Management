import React, { useState } from 'react'
import BackButton from '../Components/BackButton'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

export default function UpdatePassword() {
    const data=useLocation().state;
    const navigate=useNavigate();
    const [password,setPassword]=useState("")
    const [cpassword,setCpassword]=useState("")
    const updatePass=async(e)=>{
        e.preventDefault();
        if(password!==cpassword){
            document.getElementById("error").innerHTML="Password mismatch";
        }else{
            const response=await axios.post("http://localhost:8080/updatePassword",{
                email:data.email,
                password:password
            })
            if(response.data==="Password updated"){
                navigate('/login',{replace:true})
            }else{
                document.getElementById("error").innerHTML=response.data;
            }
        }
    }
    return (
        <div className='flex flex-wrap justify-center m-5 mt-32 mb-20 p-2' style={{ minWidth: "250px" }}>
            <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form class="space-y-6" onSubmit={updatePass}>
                    <div className='flex justify-between'>
                        <BackButton />
                        <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Update Your password</h5>
                    </div>
                    <h5 className='text-green-400'>Updating password of account linked with a email {data.email}</h5>
                    <h4 id='error' className='text-red-400'></h4>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={password} onChange={e=>{setPassword(e.target.value)}}/>
                    </div>
                    <div>
                        <label for="cpassword" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter Your password</label>
                        <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={cpassword} onChange={e=>{setCpassword(e.target.value)}}/>
                    </div>

                    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                </form>
            </div>
        </div>
    )
}
