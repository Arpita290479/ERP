import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function School() {
   

  
  const [newSchoolID, setnewSchoolID] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newAddress, setNewAddress] = useState('');
  
  let {pass} = useContext(UserContext)
  console.log(pass)
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(()=>{
      getData()
      },[])
  async function getData(){
      if(pass){
          let result = await axios.get(`http://localhost:4000/api/getAllSchool`)
      setData(result.data)
      }else{
          navigation('/')
      }
  }


  const handleAdd = () => {
    const newData = {
      id: data.length + 1,
      schoolID: newSchoolID,
      name: newName,
      email: newEmail,
      phone: newPhone,
      address: newAddress
    };
    setData([...data, newData]);
    setnewSchoolID('');
    setNewName('');
    setNewEmail('');
    setNewStandard('');
    setNewSection('');
    setNewPhone('');
    navigation('/addschool')
};

 

    async function handleDelete(id){
        let result = confirm("Are U sure to Delete")
        if(result == true){
            await axios.delete(`http://localhost:4000/api/deleteSchool/${id}`)
            getData()
        }
    }

    async function handleView(id)
    {
        navigation('/viewschool')
    }
 
    async function handleEdit(id)
    {
        navigation('/editschool')
    }

  return (
    <div>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-black">Schools</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of allwSchools. You can add newwSchool, edit or delete existing
              ones.
            </p>
          </div>

    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="EnterwSchool ID"
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
    </div>

          <div>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add New School
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-400">
      
                    <tr>
                      <th>School ID</th>
                      <th>NAME</th>
                      <th>CLASS</th>
                      <th>SECTION</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                <tbody className="bg-gray-200 text-center items-center ">
               {data.map((item) => (
                <tr key={item.id}>
              <td>{item.schoolID}</td>
              <td>{item.name}</td>
              <td>{item.standard}</td>
              <td>{item.section}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                
              <div className='flex w-full items-center space-x-2 md:w-1/3'> 
                <button type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={() => handleDelete(item._id)}>Delete</button>
             
                <button type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={() => handleEdit(item._id)}>Edit</button>
             
             <button type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={() => handleView(item._id)}>View</button>
             
              </div>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      </div>
      </div>
     </section>
    </div>
  );
};


