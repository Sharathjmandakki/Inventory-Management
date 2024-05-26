import React from 'react'

export default function Graph(props) {
    return (
        <div>
            <p class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
               <p class="font-normal text-gray-700 dark:text-gray-400">{props.txt}</p>
               <h5 class="m-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.no}</h5>
            </p>
        </div>
    )
}
