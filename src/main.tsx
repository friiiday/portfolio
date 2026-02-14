import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App'
import { Experience } from './pages/Experience';
import { Welcome } from './pages/Welcome';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <App /> }>
              <Route index path="home" element={ <Welcome /> } />
              <Route path="experience" element={ <Experience /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)