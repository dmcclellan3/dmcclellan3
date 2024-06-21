import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// project styles
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import About from './About'
import App from './App'
import Blog from './Blog'
import Contact from './Contact'
import Projects from './Projects'
import ErrorPage from './ErrorPage'

const site = import.meta.env.BASE_URL

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/about',
    element: <About />
  },
  { path: '/blog',
    element: <Blog />  
  },
  { path: '/contact',
    element: <Contact />
  },
  { path: '/projects',
    element: <Projects />
  },
],)

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
