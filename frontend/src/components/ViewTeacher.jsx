import axios from 'axios'
import { ArrowUpRight } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function ViewTeacher() {
  let {id} = useParams()

  let [data, setData] = useState([])
useEffect(()=>{
getDataById()
},[])
  async function getDataById(){
    let result = await axios.get(`http://localhost:4000/api/getTeacherId/${id}`)
    setData(result.data)
  }
  return (
  <>
  <div>
    {data.map((data)=>(
        <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
            Teacher Id:- <span>{data.teacherID}</span>
            </h1>
            <br />
            <h1 className="inline-flex items-center text-lg font-semibold">
            Teacher Name:- <span>{data.name}</span>
            </h1>
            <br />
            <h1 className="inline-flex items-center text-lg font-semibold">
            Deignation:- <span>{data.designation}</span>
            </h1>
            <p className="mt-3 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Macbook
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Apple
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Laptop
              </span>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                alt="Dan_Abromov"
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">Dan Abromov</span>
                <span className="text-[8px] font-medium text-gray-500">@dan_abromov</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  </>
  )
}
