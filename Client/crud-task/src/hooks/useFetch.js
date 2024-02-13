import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";
import instance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import validate from "./useValidation";


const useFetch = (initialValues) => {
    const [data, setData] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmit) {
    // Only navigate if there are no errors and the form has been submitted
        navigate("/users");
      }
    }, [errors, isSubmit, navigate]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      setErrors(validate(data)); // Set errors asynchronously
  
      // Use a timeout to wait for the asynchronous update of errors
      setTimeout(() => {
        setIsSubmit(true);
      }, 0);
  
      if (data.name === "" || data.email === "" || data.password === "" || data.address === "") {
        Swal.fire(
          'Please Fill the components?',
          'That thing is still around?',
          'question'
        );
      } else {
        try {
          // Only send the request if isSubmit is true
          if (isSubmit) {
            let response = await instance.post("/add-User", { data });
            console.log(response.data);
          }
  
          if (response.data.status === "ok") {
            Swal.fire(
              'Good job!',
              'Signup Success!',
              'success'
            );
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops..',
              text: 'User Already Registered!',
            });
          }
        } catch (error) {
          console.log(error.message);
          // alert(error.message)
        }
      }
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    console.log(data);
  
    return {
      handleChange,
      handleSubmit,
      data,
      errors,
    };
  };
  
  export default useFetch;
  