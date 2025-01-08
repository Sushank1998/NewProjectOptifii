
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard from "./components/layout/Dashboard"
import Sidebar from './components/navbar/Sidebar'


function App() {

const router = createBrowserRouter([
  {
    path:'/',
    element: <Dashboard/>,
    children: [
      {
        path: '/',
        element: <Sidebar/>
      },
    ]
   
  }
])
  
  return (
    <RouterProvider router={router}>
  
    </RouterProvider>
  )
}

export default App
