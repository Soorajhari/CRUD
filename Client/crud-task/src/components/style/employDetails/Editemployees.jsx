import React from "react";
import { getValue } from "../../../functions/getValue";
import useUserdata from "../../../hooks/useUserdata";
import { useParams,useNavigate } from "react-router-dom";


const Editemployees = () => {
    const Initialvalue=getValue()
    const  params=useParams()
    const {handleChange,handleSubmit,editData}=useUserdata(Initialvalue,params)

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[450px] h-[450px] shadow-2xl px-3">
        <div className="flex justify-center">
          <div className="mx-auto mt-10">
            <h3 className="text-2xl font-semibold">Edit Employee</h3>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-y-5 ">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="" className="text-lg font-medium ">
              Name
            </label>
            <input
              className="border border-black h-[40px] px-2"
              name="name"
              value={editData.name}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Email
            </label>
            <input
              className="border border-black  h-[40px] px-2 "
              name="email"
              value={editData.email}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Address
            </label>
            <input
              className="border border-black  h-[40px] px-2"
              name="address"
              value={editData.address}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
            />
          </div>
      
        </div>
        <div className="w-[150px] rounded-2xl p-2 bg-blue-500 hover:bg-blue-800 mt-8 flex justify-center mx-auto ">
          <button
            className=" text-lg font-medium"
            onClick={(e) => handleSubmit(e)}
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Editemployees;
