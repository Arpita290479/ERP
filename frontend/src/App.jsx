
import {Outlet} from 'react-router-dom'
import UserContextProvider from "./context/UserContextProvider";
export default function App() {
  return (
   <>
   <UserContextProvider>
   <Outlet/>
   </UserContextProvider>
   </>
  )
}