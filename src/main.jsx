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
import ListedBooks from './components/ListedBooks/ListedBooks';
import { element } from 'prop-types';
import PagesToRead from './components/PagesToRead/PagesToRead';
// import renderBarChart from './components/renderBarChart/renderBarChart';

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
      {
        path: '/applied',
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch('/books.json') //warning: only load the data you need .do not load all the data
      },
      {
        path: '/pagestoread',
        element: <PagesToRead></PagesToRead>,// Separate path for PagesToRead
        loader: () => fetch('/books.json') //warning: only load the data you need .do not load all the data
      },
      // {
      //   path: '/pages-to-read',
      //   element:<testChart
      //   loader: () => fetch('/books.json') //warning: only load the data you need; do not load all the data
      // },
      
     
      
      
      {
        path: '/book/:bookId',
        element: <BookDetails />,
        loader: async ({params }) => {         // This are used for load the useParams id:
          const response = await fetch('/books.json');
          const books = await response.json();
          return books;
        },
        // s
        
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
