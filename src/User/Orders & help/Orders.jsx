import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Orders() {
  const [orders, setOrders] = useState([]);
  // const orders=order.reverse();
  const type = window.localStorage.getItem('as');
  const [date, setDate] = useState("");
  useEffect(() => {
    async function data() {
      const response = await axios.get("http://localhost:8080/allOrders")
      if (type === "Admin") {
        const data=response.data;
        setOrders(data.reverse())
      }
    }
    data()
  }, [])
  const Search = async (e) => {
    e.preventDefault();
    if (date !== undefined || date !== null || date !== " ") {
      const response = await axios.post("http://localhost:8080/Orderbydate", { date: date, user: date })
      if (response.data !== undefined && response.data.length !== 0) {
        const data=response.data;
        setOrders(data.reverse())
      } else {
        window.location.reload();
      }
      console.log(response.data);
    }
  }
  return (
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div class="p-4 flex flex-wrap justify-between">
          <h2 className='text-red-50 font-bold text-5xl'>
           Orders
          </h2>
          <form onSubmit={Search}>
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative mt-1">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" id="table-search" class="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Order id / date or costomer name" onChange={e => setDate(e.target.value)} />
            </div>
          </form>
        </div>
      {
        orders?.map((o) => (
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg m-5 min-w-72 flex-wrap-reverse">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Order id : {o.oid}
                <p className='text-wrap'>Orderd by <span className='text-red-400'>{(o.costomer !== "" || o.costomer !== "null" || o.costomer !== undefined) ? o.costomer : "User"}</span> paid amount <span className='text-green-400'>{o.total}</span> on <span className='text-green-400'>{(o.date !== "null" || o.date !== undefined) ? o.date : "Date"}</span> Billed By <span className='text-red-400'>{o.user}</span></p>
              </caption>
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Qty
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Unit Cost
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Total Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  o?.itms?.map((i) => (
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {i.name}
                      </th>
                      <td class="px-6 py-4">
                        {i.qty}
                      </td>
                      <td class="px-6 py-4">
                        {i.cost}
                      </td>
                      <td class="px-6 py-4">
                        {i.qty * i.cost}
                      </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        ))
      }
    </div>
  )
}
