import React, { useEffect, useState } from 'react'
import { MdOutlineInventory2 } from 'react-icons/md'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import NotificationMsg from '../Components/NotificationMsg';

export default function User() {
  const [menu, setMenu] = useState(true)
  const user = window.localStorage.getItem("email");
  const as = window.localStorage.getItem("as");
  const navgate = useNavigate();
  useEffect(() => {
    function data() {
      if (!window.navigator.onLine) {
        alert("Check your internet")
      } else {
        if (user === undefined || user === null || user === "" || as === "Admin") {
          navgate("/login", { replace: true })
        } else {
          document.title = "Inventory | " + user
        }
      }
    }
    data()
  }, [])
  const me = () => {
    navgate("/" + user)
  }
  const open = () => {
    setMenu(!menu);
  }
  const [pg, setPg] = useState(0);
  const home = () => {
    setPg(0);
  }
  // const item = () => {
  //   setPg(1);
  // }
  const addOrder = () => {
    setPg(1);
  }
  const order = () => {
    setPg(2);
  }
  const help = () => {
    setPg(3);
  }

  return (
    <div>
      <NotificationMsg />
      <nav class="bg-white border-gray-200 dark:bg-gray-900 min-w-80">
        <div class="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse" onClick={home}>
            <span class="flex flex-wrap self-center text-2xl font-semibold dark:text-white">Inventory</span>
          </Link>
          <button onClick={open} data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            {/* <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg> */}
            <MdOutlineInventory2 color='white' size={30} />
          </button>
          <div class={menu ? "hidden w-full md:block md:w-auto" : "w-full md:block md:w-auto"} id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" class={(pg === 0) ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} aria-current="page" onClick={home}>Home</Link>
              </li>
              {/* <li>
                <Link to="/item" class={(pg === 1) ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} onClick={item}>Add Item</Link>
              </li> */}
              <li>
                <Link to="/cart" class={(pg === 1) ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} onClick={addOrder}>Cart</Link>
              </li>
              <li>
                <Link to="/orders" class={(pg === 2) ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} onClick={order}>Orders</Link>
              </li>
              <li>
                <Link to="/help" class={(pg === 3) ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"} onClick={help}>Help/Contact</Link>
              </li>
              <l1>
              <Link to={user} className='block py-2 px-3 text-red-50 text-lg hover:text-red-400'>Hi {user}👋</Link>
                {/* <button onClick={() => me()} className='text-red-50 text-lg hover:text-red-400'>Hi {user}👋</button> */}
              </l1>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}
