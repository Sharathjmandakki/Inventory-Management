import axios from 'axios';
import React, { useState } from 'react'
import { Link, json, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const login = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email: email,
        password: password
      });
      window.localStorage.setItem("email", response.data.username);
      window.localStorage.setItem("as",response.data.as)
      if (response.data.as === "User") {
        navigate('/', { replace: true })
      } else if (response.data.as === "Admin") {
        navigate('/admin', { replace: true })
      }
      else {
        document.getElementById("error").innerHTML = response.data.as;
      }
    } catch (e) {
      document.getElementById("error").innerHTML = "Server error";
    }
  }

  return (
    <div className='flex flex-wrap justify-center m-5 mt-32 mb-20 p-2' style={{ minWidth: "250px" }}>
      <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h4 id='error' className='text-red-400'></h4>
        <form class="space-y-6" onSubmit={login}>
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">Login in</h5>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="text" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required value={email} onChange={e => { setEmail(e.target.value) }} />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={password} onChange={e => { setPassword(e.target.value) }} />
          </div>

          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div class="flex flex-wrap justify-between">
            <Link to="/register" class="text-sm text-blue-700 dark:text-blue-500">Create account!</Link>
            <Link to="/validate" class="text-sm text-blue-700 dark:text-blue-500">Lost Password?</Link>
          </div>
        </form>
      </div>
    </div>
  )
}
