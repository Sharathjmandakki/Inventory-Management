import React from 'react'
import { MdArrowBackIos } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function BackButton() {
    const navigation =useNavigate();
    const Back=()=>{
        navigation(-1);
    }
  return (
    <div><MdArrowBackIos  onClick={Back} className='cursor-pointer text-xl text-red-50 font-bold'/></div>
  )
}
