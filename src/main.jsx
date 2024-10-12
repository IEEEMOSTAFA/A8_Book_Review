import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      // {
      //   path: '/applied',
      //   element: <AppliedJobs />,
      //   loader: () => fetch('/jobs.json') //warning: only load the data you need .do not load all the data
      // },
      // {
      //   path: '/job/:id',
      //   element: <JobDetails />,
      //   // Assuming the jobs.json is in the public folder:
      //   loader: () => fetch('/jobs.json')  // Do not load all data load only what you need
      // }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
