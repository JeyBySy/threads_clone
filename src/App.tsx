import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/layout/MainLayout'
import Column from './components/Column/Column'
import UserReplies from './pages/ProfileTabs/UserReplies'
import UserPost from './pages/ProfileTabs/UserPost'
import UserMedia from './pages/ProfileTabs/UserMedia'
import UserRepost from './pages/ProfileTabs/UserRepost'

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
            <Route path='@j_h_e_r_i_c_o' element={<Column type='profile' />} >
              <Route index element={<UserPost />} />
              <Route path='replies' element={<UserReplies />} />
              <Route path='media' element={<UserMedia />} />
              <Route path='reposts' element={<UserRepost />} />
            </Route>
            <Route path='insights' element={<Column type='insights' />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
