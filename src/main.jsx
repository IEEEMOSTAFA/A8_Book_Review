import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Errorpage from './components/Errorpage/Errorpage';
import Home from './components/Home/Home';
import BookDetails from './components/BookDetails/BookDetails';

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
      //   path: '/book/:bookId' ,      
      //   element: <BookDetails />,        
      //   loader: () => fetch('/books.json')
        
      // },
      {
        path: '/book/:bookId',
        element: <BookDetails />,
        loader: async ({params }) => {         // This are used for load the useParams id:
          const response = await fetch('/books.json');
          const books = await response.json();
          return books;
        },
        
      }
      
      
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
