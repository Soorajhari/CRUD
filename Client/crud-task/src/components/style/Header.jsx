import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Header() {
//  const navigate=useNavigate()
  const adminLogout = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Logout?',
      text: "Do you want to Logout?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1d5d9b',
      cancelButtonColor: '#ff6969',
      confirmButtonText: 'Logout'
    }).then((result) => {
      if (result.isConfirmed) {
        // navigate('/admin')
      }
    })
  }
  return (
    <nav class="flex shadow-lg">
      <div class="w-full flex h-[100px] p-4 px-5 md:px-10 items-center justify-between">
        <a class="md:text-2xl font-bold text-base">WELCOME ADMIN</a>
        <div class="">
          <form class="" >
            <button class="rounded p-1 px-2 md:px-4 bg-yellow-500 hover:bg-yellow-700 text-white" onClick={adminLogout}  >Logout</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Header