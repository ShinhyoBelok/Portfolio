import './App.css'
import {
  Routes, Route
} from 'react-router-dom';
import MainPage from './pages/MainPage'
function App() {

  return (
    <div className="app_container">
      <Routes>
        <Route exact path="/home" element={<MainPage />} />
      </Routes>
    </div>
  )
}

export default App
