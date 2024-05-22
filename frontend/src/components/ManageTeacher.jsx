import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import UserContext from '../context/UserContext'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ManageTeacher() {
   

  
  const [newTeacherID, setNewTeacherID] = useState('');
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newDesignation, setNewDesignation] = useState('');
  
  let {pass} = useContext(UserContext)
  console.log(pass)
  let navigation = useNavigate()
  let [data, setData] = useState([])
  useEffect(()=>{
      getData()
      },[])
  async function getData(){
      if(pass){
          let result = await axios.get(`http://localhost:4000/api/getAllTeacher`)
      setData(result.data)
      }else{
          navigation('/')
      }
  }


  const handleAdd = () => {
    const newData = {
      id: data.length + 1,
      teacherID: newTeacherID,
      name: newName,
      email: newEmail,
      phone: newPhone,
      designation: newDesignation
    };
    setData([...data, newData]);
    setNewTeacherID('');
    setNewName('');
    setNewEmail('');
    setNewPhone('');
    setNewDesignation('');
    navigation('/addteacher')
};

 

    async function handleDelete(id){
        let result = confirm("Are U sure to Delete")
        if(result == true){
            await axios.delete(`http://localhost:4000/api/deleteTeacher/${id}`)
            getData()
        }
    }

    let [teacherId, setTeacherId]= useState('')
    async function getTeacherId(){
      let result = await axios.get(`http://localhost:4000/api/getTeacherId/${teacherId}`)
      setData(result.data)
    }
  return (
    <div>
        <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold text-black">Teachers</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Teachers. You can add new Teacher, edit or delete existing
              ones.
            </p>
          </div>

    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Enter Teacher ID"
      onChange={(e)=>setTeacherId(e.target.value)}
      ></input>
      <button
        type="button"
        onClick={getTeacherId}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Search
      </button>
      <button
        type="button"
        onClick={getData}
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        All
      </button>
    </div>

          <div>
            <button
              type="button"
              onClick={handleAdd}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Add new Teacher
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
                      <th>Teacher ID</th>
                      <th>NAME</th>
                      <th>EMAIL</th>
                      <th>PHONE</th>
                      <th>ADDRESS</th>
                      <th>ACTION</th>
                    </tr>
                  </thead>
                <tbody className="bg-gray-200 text-center items-center ">
               {data.map((item) => (
                <tr key={item.id}>
              <td>{item.teacherID}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.designation}</td>
              <td>
                
              <div className='flex w-full items-center space-x-2 md:w-1/3'> 
                <button type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
             onClick={() => handleDelete(item._id)}>Delete</button>
        
             
             <Link type="button"
             to={`/viewTeacher/${item._id}`}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >View</Link>
             <Link type="button"
             to={`/editTeacher/${item._id}`}
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >Edit</Link>
             
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


