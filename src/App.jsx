import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login&Register/Login'
import Register from './Login&Register/Register'
import Me from './Login&Register/Me'
import Update from './Login&Register/Update'
import UpdatePassword from './Login&Register/UpdatePassword'
import User from './User/User'
import AddToCart from './User/Cart/AddToCart'
import UserHome from './User/UserHome'
import Help from './User/Orders & help/Help'
import Orders from './User/Orders & help/Orders'
import UserCart from './User/Cart/UserCart'
import Admin from './Admin/Admin'
import GetUser from './Components/GetUser'
import Messages from './Admin/Users Info/Messages'
import AllUsers from './Admin/Users Info/AllUsers'
import AddItem from './Admin/Items/AddItem'
import Cart from './Admin/Cart/Cart'
import Home from './Admin/Items/Home'
import AddToAdminCart from './Admin/Cart/AddToAdminCart'
import Upgrade from './Admin/Users Info/Upgrade'
import UpdateItem from './Admin/Items/UpdateItem'
import AddUser from './Admin/Users Info/AddUser'
export default function App() {
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/validate' element={<GetUser />} />
        <Route path='/updatepass' element={<UpdatePassword />} />
        <Route path='/' element={<User />}>
          <Route path='' element={<UserHome />}>
            <Route path='addc' element={<AddToCart />} />
          </Route>
          {/* <Route path='item' element={<AddItem />} /> */}
          <Route path='orders' element={<Orders />} />
          <Route path='help' element={<Help />} />
          <Route path='update' element={<Update />} />
          <Route path='cart' element={<UserCart />} />
          <Route path='*' element={<Me />} />
        </Route>
        <Route path='/admin/' element={<Admin />}>
          <Route path='' element={<Home />} >
            <Route path='update' element={<UpdateItem />} />
            <Route path='addc' element={<AddToAdminCart />} />
          </Route>
          <Route path='item' element={<AddItem />} />
          <Route path='orders' element={<Orders />} />
          <Route path='users' element={<AllUsers />}>
          <Route path='upgrade' element={<Upgrade />} />
          <Route path='addUser' element={<AddUser />} />
          </Route>
          <Route path='messages' element={<Messages />} />
          <Route path='cart' element={<Cart />} />
          <Route path='update' element={<Update />} />
          <Route path='upgrade' element={<Upgrade />} />
          <Route path='*' element={<Me />} />
        </Route>
      </Routes>
    </>
  )
}
