import './App.css'
import { Outlet } from 'react-router'
import { MainMenu } from './components/mainMenu/MainMenu'

function App() {

  return (
    <>
      <MainMenu />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

export default App
