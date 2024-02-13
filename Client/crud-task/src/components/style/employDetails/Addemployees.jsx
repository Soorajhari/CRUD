import React from "react";
import useFetch from "../../../hooks/useFetch";
import { getValue } from "../../../functions/getValue";

const Addemployees = () => {
  const formData = getValue();
  const { handleChange, handleSubmit, data, errors } = useFetch(formData);

  return (
    <div className="flex justify-center items-center min-h-screen">
     <div className={`w-[450px] ${errors ? 'h-[600px]' : 'h-[550px]'} shadow-2xl px-3`}>
        <div className="flex justify-center">
          <div className="mx-auto mt-10">
            <h3 className="text-2xl font-semibold">Add Employee</h3>
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
              value={data.name}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
              required
            />
             {errors.name && (
            <div
              className="text-center mt-1 text-xs font-thin md:text-sm"
              style={{ color: "red" }}
            >
              {errors.name}
            </div>
          )}
          </div>
         
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Email
            </label>
            <input
              className="border border-black  h-[40px] px-2 "
              name="email"
              value={data.email}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
              required
            />
             {errors.email && (
            <div
              className="text-center mt-1  text-xs font-thin md:text-sm"
              style={{ color: "red" }}
            >
              {errors.email}
            </div>
          )}
          </div>
         
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Address
            </label>
            <input
              className="border border-black  h-[40px] px-2"
              name="address"
              value={data.address}
              onChange={(e) => handleChange(e)}
              type="text"
              placeholder="name"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className="text-lg font-medium ">
              Password
            </label>
            <input
              className="border border-black  h-[40px] px-2"
              name="password"
              value={data.password}
              onChange={(e) => handleChange(e)}
              type="password"
              placeholder="name"
              required
            />
            {errors.password && (
            <div
              className="text-center mt-2 text-xs font-thin md:text-sm"
              style={{ color: "red" }}
            >
              {errors.password}
            </div>
          )}
          </div>
          
        </div>
        <div className="w-[150px] rounded-2xl p-2 bg-blue-500 hover:bg-blue-800 mt-8 flex justify-center mx-auto ">
          <button
            className=" text-lg font-medium"
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addemployees;
