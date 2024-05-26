import axios from 'axios';
import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import Graph from '../../Components/Graph';

export default function Home() {
  const inventory = [1000, 586, 414]
  const [name,setName]=useState("");
  const [items, setItems] = useState([]);
  const [graph,setGraph]=useState([]);
  useState(() => {
    async function data() {
      try{
        const response = await axios.get("http://localhost:8080/allItem")
        setItems(response.data)
        const data = await axios.get("http://localhost:8080/numricData")
        setGraph(data.data)
      }catch{
        navgate("/login", { replace: true })
      }
    }
    data()
  }, [])
  const navgate = useNavigate();
  const addToCart = (item) => {
    navgate("addc", { state: { data: item } })
  }
  const updateItem = (item) => {
    navgate("update", { state: { data: item } })
  }
  const deleteItem = async(item) => {
      const respose = await axios.post("http://localhost:8080/deleteItem", {
          id: item.id,
          name: item.name,
      })
      if (respose.data === "Deleted") {
          alert(respose.data)
          window.location.reload();
      }
  }
  const Search=async(e)=>{
    e.preventDefault();
    const response = await axios.post("http://localhost:8080/getItem",{name:name,})
    if(response.data===null||response.data===undefined||response.data===''){  
      alert("Item dosen't exist")
    }else{
      setItems(response.data)
    }
  }
  return (
    <div className='m-5'>
      <div className='flex flex-wrap justify-between p-5'>
       <Graph txt="Total Number Users" no={graph.noUsers}/>
       <Graph txt="Total Number of Items in Inventory" no={graph.noItems}/>
       <Graph txt="Total unread Messages" no={graph.noMsgs}/>
      </div>
      <hr />
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
              <input type="search" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for items" onChange={e=>setName(e.target.value)} />
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
                Update Item
              </th>
              <th scope="col" class="px-6 py-3">
                Delete Item
              </th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
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
                  (i.qty < 10) ? <td class="px-6 py-4 text-red-400">
                    {i.qty}
                  </td> : <td class="px-6 py-4">
                    {i.qty}
                  </td>
                }
                <td class="px-6 py-4">
                  <button onClick={() => updateItem(i)} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                </td>
                <td class="px-6 py-4">
                  <button onClick={() => deleteItem(i)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Outlet />
      </div>
    </div>
  )
}
