import axios from 'axios';
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export default function UserHome() {
  const [items, setItems] = useState([]);
  const [name,setName]=useState("");
  useState(() => {
    async function data() {
      try {
        const response = await axios.get("http://localhost:8080/allItem")
        setItems(response.data);
      } catch {
        navgate("/login", { replace: true })
      }
    }
    data()
  }, [])
  const Search=async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/getItem",{name:name,})
    if(response.data===null||response.data===undefined||response.data===''){  
      alert("Item dosen't exist")
    }else{
      setItems(response.data)
    }
  }
  const navgate = useNavigate();
  const addToCart = (item) => {
    navgate("addc", { state: { data: item } })
  }
  return (
    <div className='m-5'>
      <Outlet />
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="p-4 flex flex-wrap justify-between">
          <h2 className='text-red-50 font-bold text-2xl'>
            Items in Inventroy
          </h2>
          <form onSubmit={Search}>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" onChange={e=>setName(e.target.value)} value={name} />
            </div>
          </form>
        </div>
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price per unit
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Add to cart
              </th>
            </tr>
          </thead>
          <tbody>
            {items?.map(i => (
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">

                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {i.brand + " | " + i.name}
                </th>
                <td class="px-6 py-4">
                  {i.color}
                </td>
                <td class="px-6 py-4">
                  {i.catagory}
                </td>
                <td class="px-6 py-4">
                  {i.cost}
                </td>
                {
                  (i < 10) ? <td class="px-6 py-4 text-red-400">
                    {i.qty}
                  </td> : <td class="px-6 py-4">
                    {i.qty}
                  </td>
                }
                <td class="px-6 py-4">
                  <button onClick={() => addToCart(i)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Add</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
