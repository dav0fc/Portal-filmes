import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ListaFilmes from './pages/MovieListPage.jsx'
import MovieDetailPage from '.'

const router = createBrowserRouter([{
  path: '/', element: <App/>,
  children: [{
    index:true , element: <Home/>},
    { path: '/filmes', element : <ListaFilmes/>}
    { path: '/filmes/:id' , element:<MovieDetailPage/>}
    { path: '/genero' , element: <GenreListPage/>}
    { path: '/genero/:id' , element: <MoviesByGenrePage/>}
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={router}/>
  </StrictMode>,
)
