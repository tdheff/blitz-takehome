import React, { createContext, useContext } from 'react'
import ReactDOM from 'react-dom/client'
import { setup } from 'goober'
import App from './App.tsx'
import './index.css'
import { theme } from './theme.ts'

const ThemeContext = createContext(theme);
const useTheme = () => useContext(ThemeContext);

setup(React.createElement, undefined, useTheme)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <img id="reference-image" src="objective.png" /> */}
    <App />
  </React.StrictMode>,
)
