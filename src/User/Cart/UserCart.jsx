import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function UserCart() {
  const [cart,setCart]=useState();
  const user=window.localStorage.getItem("email");
  useEffect(()=>{
    async function data(){
      const response=await axios.post("http://localhost:8080/viewCart",{
        user:user,
      })
      if(response.data!==undefined||response.data!==null){
        setCart(response.data)
      }
    }
    data()
  },[])
  const deleteFromCart=async(i)=>{
    const response=await axios.post("http://localhost:8080/deleteFromCart",{
        user:user,
        id:i.id,
        qty:i.qty
      })
      window.location.reload();
  }
  const clearCart=async()=>{
    const response=await axios.post("http://localhost:8080/clear",{
        user:user,
      })
      alert("cleared")
      window.location.reload();
  }
  const BillIt=async (c)=>{
    const costomer=prompt("Enter the user name");
    const response=await axios.post("http://localhost:8080/billIt",{
      user:user,
      cid:c.id,
      costomer:costomer
    })
    alert(response.data)
    window.location.href="/"
    // console.log(cart);
  }
  return (
    <div className='m-5 p-2'>
      <h1 className='text-5xl text-pretty text-red-50 font-bold text-center m-5'>Your Cart</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              {/* <th scope="col" class="px-16 py-3">
                <span class="sr-only">Image</span>
              </th> */}
              <th scope="col" class="px-6 py-3">
                Product
              </th>
              <th scope="col" class="px-6 py-3">
                Qty
              </th>
              <th scope="col" class="px-6 py-3">
                Price per unit
              </th>
              <th scope="col" class="px-6 py-3">
                total
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {
              cart?.items?.map(i => (
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {/* <td class="p-4">
                    <img src="/docs/images/products/iphone-12.png" class="w-16 md:w-32 max-w-full max-h-full" alt="iPhone 12"/>
                  </td> */}
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {i.name}
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {i.qty}
                  </td>
                  {/* <td class="px-6 py-4">
                      <div class="flex items-center">
                        <button class="inline-flex items-center justify-center p-1 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span class="sr-only">Quantity button</span>
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                          </svg>
                        </button>
                        <div class="ms-3">
                          <input type="number" id="first_product" class="bg-gray-50 w-14 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-2.5 py-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1" value={qty} required min={1} max={100} />
                        </div>
                        <button class="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                          <span class="sr-only">Quantity button</span>
                          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                          </svg>
                        </button>
                      </div>
                    </td> */}
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {i.cost}
                  </td>
                  <td class="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    ₹ {i.cost*i.qty} /-
                  </td>
                  <td class="px-6 py-4">
                    <button onClick={()=>deleteFromCart(i)} class="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</button>
                  </td>
                </tr>
              ))
            }
            <tr>
              <td class="px-6 py-4"  colSpan={3}>
                {/* <p className='text-red-50 text-2xl font-bold'>Grand Total :  ₹ {cart?.total}/-</p> */}
              </td>
              <td class="px-6 py-4">
                {(cart)?<button onClick={()=>{BillIt(cart)}} class="font-medium text-blue-500 dark:text-blue-500 text-xl hover:text-yellow-400 hover:dark:text-yellow-300 p-2 bg-gray-100 rounded-lg hover:bg-black">Bill  {(cart)?"₹ "+cart?.total+"/-":""}</button>
              :<></>}
              </td>
              <td class="px-6 py-4">
                <button onClick={clearCart} class="font-medium text-black dark:text-black text-xl hover:text-yellow-400 hover:dark:text-yellow-300 p-2 bg-red-400 rounded-lg hover:bg-black">Clear</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}
