import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Questionaire from './Questionaire.jsx'

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/"
  },
  {
    element: <Questionaire/>,
    path: "/questionaire"
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
