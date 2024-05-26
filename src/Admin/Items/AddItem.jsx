import axios from 'axios';
import React, { useState } from 'react'

export default function AddItem() {
  const [cost, setCost] = useState("")
  const [qty, setQty] = useState("")
  const [brand, setBrand] = useState("");
  const [catagory, setCatagory] = useState("");
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const addItem = async (e) => {
      e.preventDefault();
      const response=await axios.post("http://localhost:8080/addItem",{
        name:name,
        brand:brand,
        color:color,
        catagory:catagory,
        cost:cost,
        qty:qty,
      })
      if(response.data==="Added"){
        alert("Items added")
        setBrand("")
        setColor("")
        setCatagory("")
        setCost("")
        setName("")
        setQty("")
      }else{
        alert(response.data)
      }
  }
  return (
      <div className='flex flex-wrap justify-center m-5 mb-20 p-2' style={{ minWidth: "250px" }}>
          <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" onSubmit={addItem}>
                      <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Add Item</h5>
                  <h4 id='error' className='text-red-400'></h4>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item name</label>
                      <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="item name" required value={name} onChange={e=>{setName(e.target.value)}} />
                  </div>
                  <div>
                      <label for="catagory" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item catagory </label>
                      <input type="text" name="catagory" id="catagory" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="pants" required  value={catagory} onChange={e=>{setCatagory(e.target.value)}}/>
                  </div>
                  <div>
                      <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item brand</label>
                      <input type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="H&M" required value={brand} onChange={e => { setBrand(e.target.value) }} />
                  </div>
                  <div>
                      <label for="color" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item color</label>
                      <input type="text" name="color" id="color" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="black" required value={color} onChange={e => { setColor(e.target.value) }} />
                  </div>
                  <div>
                      <label for="cost" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item cost per unit</label>
                      <input type="number" name="cost" id="cost" placeholder="450" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required value={cost} onChange={e => { setCost(e.target.value) }} />
                  </div>
                  <div>
                      <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Qty</label>
                      <input type="number" name="qty" id="qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="10" required value={qty} onChange={e => { setQty(e.target.value) }} />
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add item</button>
              </form>
          </div>
      </div>
  )
}
