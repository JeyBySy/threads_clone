import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout'
import Column from './components/Column/Column'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            <Route index element={<Column type='feed' />} />
            <Route path='search' element={<Column type='search' />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
