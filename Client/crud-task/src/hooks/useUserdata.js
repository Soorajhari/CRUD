import React, { useState, useEffect } from 'react'
import instance from '../utils/axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const useUserdata = (initialValues, params) => {
    const navigate = useNavigate()
    const [editData, setEditData] = useState(initialValues);
    console.log(editData)

    useEffect(() => {
        // get the user data from backend 
        instance.get(`${"/editUser"}/${params.id}`).then((res) => {
            console.log(res.data.userData);
            setEditData(res.data.userData)
        }).catch((err) => {
            alert(err)
        })
    }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = {
            editData,
        };
       console.log(editData)

        try {
            // this pass the edited data to backend and update the specified one
            const response = await instance.put(`${"/update"}/${params.id}`, body);
           console.log(response.data)
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Update it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    if (body.email === "" || body.name === "" || body.address === "") {
                        Swal.fire(
                            'Please Fill the components?',
                            'It is necessary',
                            'question'
                        );
                    } else {
                        if (response.data.userexists) {
                            Swal.fire({
                              title: 'Oops...USER EXISTS',
                              text: "try again",
                              height: "5rem",
                            })
                          } else {
                            Swal.fire(
                              'Updated!',
                              'User file has been Updated.',
                              'success'
                            )
                            navigate('/users')
                          }
                    }
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithButtons.fire(
                        'Cancelled',
                        'User is not updated:)',
                        'error'
                    );
                }
            });
        } catch (error) {
            console.error('Error updating user:', error);
            Swal.fire({
                title: 'Oops...',
                text: 'Try again',
                height: '5rem',
            });
        }
    };


    const handleChange = (e) => {
        const { name, value } = e.target
        setEditData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    return {
        handleSubmit, handleChange, editData
    }
}

export default useUserdata