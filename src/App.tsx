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
            <Route index element={<Column type='feed' feedType='for you' />} />
            <Route path='following' element={<Column type='feed' feedType='following' />} />
            <Route path='search' element={<Column type='search' />} />
            <Route path='activity' element={<Column type='activity' />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
