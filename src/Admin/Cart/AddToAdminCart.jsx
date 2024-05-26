import React, { useState } from 'react'
import BackButton from '../../Components/BackButton';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function AddToAdminCart() {
  const data = useLocation().state.data;
  const itemName = data.name;
  const id = data.id;
  const qt = data.qty;
  const user = window.localStorage.getItem("as");
  const [Qty, setQty] = useState(1);
  const navigate = useNavigate();
  const addItemTocart = async (e) => {
    e.preventDefault();
    if (Qty <= qt) {
      const response = await axios.post("http://localhost:8080/addToCart", {
        id: id,
        qty: Qty,
        user: user
      })
      alert(response.data)
      navigate(-1, { replace: 'true' })
    }else{
      alert("please select qty in range of 0 to "+qt)
    }
  }
  return (
    <div className='flex flex-wrap justify-center m-5 p-2' style={{ minWidth: "250px" }}>
      <div style={{ minWidth: "250px" }} class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={addItemTocart}>
          <h5 class="text-xl font-medium overflow-clip text-gray-900 dark:text-white">Add Item to Cart</h5>
          <h4 id='error' className='text-red-400'></h4>
          <div>
            <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your id</label>
            <input disabled type="text" name="id" id="id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-not-allowed" placeholder="id" required value={id} />
          </div>
          <div>
            <label for="item" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Name</label>
            <input disabled type="text" name="item" id="item" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white cursor-not-allowed" placeholder="4445544455" required value={itemName} />
          </div>
          <div>
            <label for="qty" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Qty</label>
            <input type="number" name="qty" id="qty" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required value={Qty} onChange={e => { setQty(e.target.value) }} max={100} min={1} />
          </div>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to Cart</button>
        </form>
      </div>
    </div>
  )
}
