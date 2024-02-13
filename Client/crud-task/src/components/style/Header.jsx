import React from 'react'
import Swal from 'sweetalert2';

function Header() {
  return (
    <nav class="flex shadow-lg">
      <div class="w-full flex h-[100px] p-4 px-5 md:px-10 items-center justify-between">
        <a class="md:text-2xl font-bold text-base">WELCOME</a>
        <div class="">
          <form class="" >
            <p className='text-lg font-bold '>Employee Data</p>
            {/* <button class="rounded p-1 px-2 md:px-4 bg-yellow-500 hover:bg-yellow-700 text-white" ></button> */}
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Header