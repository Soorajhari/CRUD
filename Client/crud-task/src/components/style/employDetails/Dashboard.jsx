import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import instance from "../../../utils/axios";
// import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Employmanagement() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserLists();
  }, []);
  const getUserLists = async () => {
    try {
    let response = await instance.get("/get-users");
      setUsers(response.data.users);
    } catch (error) {
      console.log(error.message);
    }
  };

  const userData = async (e) => {
    let user = e.target.value;
    console.log(user);
    if (!user) {
      getUserLists();
    } else {
      const response = await instance.get(`${"/get-data"}/${user}`);
      console.log(response.data.users);
      setUsers(response.data.users);
    }
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to retrive this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`${"/delete-user"}/${id}`).then((res) => {
          getUserLists();
        });
        Swal.fire("Deleted!", "User has been deleted.", "success");
      }
    });
  };

  return (
    <div className="w-full h-full">
      <Header />
      <div className="w-full h-screen flex items-center justify-center ">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className=" flex gap-4">
            <input
              className="border focus:outline-none p-2 rounded-md"
              onChange={userData}
              name="query"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to="/add">
              <button className="p-2 px-3 text- rounded bg-green-500 hover:bg-green-600 text-white">
                Add Users
              </button>
            </Link>
          </div>
          <div className="w-2/3 md:w-[850px] overflow-hidden border rounded-lg mt-3 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Edit
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                  >
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((obj, index) => (
                  <tr key={obj._id}>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {obj.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {obj.email}
                    </td>
                    <td className="px-6 py-4 text-balance text-sm text-gray-800 whitespace-nowrap">
                      {obj.address}
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link to={`/edit/${obj._id}`}>
                        <button className="text-green-500 hover:text-green-700">
                          Edit
                        </button>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => deleteUser(obj._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Employmanagement;
