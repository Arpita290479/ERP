import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Signin from './components/Signin.jsx'
import Student from './components/Student.jsx'
import Teacher from './components/Teaher.jsx'
import Admin from './components/Admin.jsx'
import School from './components/School.jsx'
import AddSchool from './components/AddSchool.jsx'
import AddTeacher from './components/AddTeacher.jsx'
import ManageTeacher from './components/ManageTeacher.jsx'
import ManageStudent from './components/ManageStudents.jsx'
import AddStudent from './components/AddStudent.jsx'
import ViewStudent from './components/ViewStudent.jsx'
import EditStudent from './components/EditStudent.jsx'
import ViewTeacher from './components/ViewTeacher.jsx'
import EditTeacher from './components/EditTeacher.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(

    <>
 <Route path='/' element={<App/>}>
  <Route path='' element={<Signin/>}/>
  <Route path='/student' element={<Student/>}/>
  <Route path='/teacher' element={<Teacher/>}/>
  <Route path='/admin' element={<Admin/>}/>
  <Route path='/school' element={<School/>}/>
  <Route path='/addschool' element={<AddSchool/>}/>
  <Route path='/addteacher' element={<AddTeacher/>}/>
  <Route path='/manageteacher' element={<ManageTeacher/>}/>
  <Route path='/managestudent' element={<ManageStudent/>}/>
  <Route path='/addstudent' element={<AddStudent/>}/>
  <Route path='/viewStudent/:id' element={<ViewStudent/>}/>
  <Route path='/editStudent/:id' element={<EditStudent/>}/>
  <Route path='/viewTeacher/:id' element={<ViewTeacher/>}/>
  <Route path='/editTeacher/:id' element={<EditTeacher/>}/>
 </Route>
    </>

    
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
