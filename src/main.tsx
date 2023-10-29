import ReactDOM from 'react-dom/client'
import {App} from "@/app/App.tsx";
import {StrictMode} from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';



const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <App/>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,


)
