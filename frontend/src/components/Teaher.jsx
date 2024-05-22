import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import UserContext from '../context/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Teacher() {

  const [selectedOption, setSelectedOption] = useState('Teacher Dashboard');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };



    let {pass} = useContext(UserContext)
    let navigation = useNavigate()
    let [data, setData] = useState([])
    useEffect(()=>{
        getData()
        },[])
    async function getData(){
        if(pass){
            let result = await axios.get(`http://localhost:4000/api/getTeacher/${pass}`)
        setData(result.data)
        }else{
            navigation('/')
        }
    }
  return (
    <>
<Navbar title='Teacher Portal'/>

<div>

<div className="dashboard-container">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleOptionChange('Profile')}>Profile</li>
          <li onClick={() => handleOptionChange('Manage School')}>Manage School</li>
          <li onClick={() => handleOptionChange('Manage Teacher')}>Manage Teachers</li>
          <li onClick={() => handleOptionChange('Manage Student')}>Manage Students</li>
          <li onClick={() => handleOptionChange('Manage Class')}>Manage Classes</li>
          <li onClick={() => handleOptionChange('Manage Subjects')}>Manage Subjects</li>
          <li onClick={() => handleOptionChange('Manage Timetable')}>Manage Timetable</li>
          <li onClick={() => handleOptionChange('Manage Events')}>Manage Events</li>
          <li onClick={() => handleOptionChange('Send Notifications')}>Send Notifications</li>
          <li onClick={() => handleOptionChange('Settings')}>Settings</li>
        </ul>
      </div>
      <div className="main-content">
        {selectedOption === 'Profile' && <div>Profile Component</div>}
        {selectedOption === 'Manage School' && <div>Manage School</div>}
        {selectedOption === 'Manage Teacher' && <div>Manage Teachers</div>}
        {selectedOption === 'Manage Student' && <div>Manage Students</div>}
        {selectedOption === 'Manage Class' && <div>Manage Classes</div>}
        {selectedOption === 'Manage Subjects' && <div>Manage Subjects</div>}
        {selectedOption === 'Manage Timetable' && <div>Manage Timetable</div>}
        {selectedOption === 'Manage Events' && <div>Manage Events</div>}
        {selectedOption === 'Send Notifications' && <div>Send Notifications</div>}
        {selectedOption === 'Settings' && <div>Settings</div>}
      </div>
    </div>

    {data.map((data)=>(
 <div className="w-[300px] rounded-md border">
 <img
   src={`http://localhost:4000/${data.image}`}
   alt="Laptop"
   className="h-[200px] w-full rounded-md object-cover"
 />
 <div className="p-4">
   <h1 className="text-lg font-semibold">Name:- <span className='font-bold'>{data.name}</span></h1>
   <h1 className="text-lg font-semibold">email:- <span className='font-bold'>{data.email}</span></h1>
   <h1 className="text-lg font-semibold">sallery:- <span className='font-bold'>{data.sallery}</span></h1>
   <h1 className="text-lg font-semibold">bacthes:- <span className='font-bold'>{data.batches}</span></h1>
   <button
     type="button"
     className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
   >
     Read
   </button>
 </div>
</div>
    ))}
</div>
   
    </>
  )
}
