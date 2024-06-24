import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Filmes from './pages/Filmes.jsx'
import Sobre from './pages/Sobre.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Home from './pages/Home.jsx'
import Favoritos from './pages/Favoritos.jsx'
import Noticias from './pages/Noticias.jsx'
import PaginaFilme from './pages/PaginaFilme.jsx'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
      {index: true, element: <Home/>},
      {path:"filmes", element: <Filmes/>},
      {path: "filmes/:id", element: <PaginaFilme/>},
      {path:"favoritos", element: <Favoritos/>},
      {path:"sobre", element: <Sobre/>},
      {path:"noticias", element: <Noticias/>},
      {path:"*", element: <PageNotFound/>}
        
      ]
    }
  ]
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
)
