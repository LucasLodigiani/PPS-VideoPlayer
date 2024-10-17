import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './VideoPlayer'

function App() {
  //Nota, si la consola del navegador lanza errores de cors, configurar bien el puerto del cors en el backend
  //Aca va el fileName del movieVideo
  const fileName = "b1da13d3-58e6-4757-ba31-cbfdfe863111.mp4"
  return (
    <>
      <div>
        <VideoPlayer fileName={fileName} />      
      </div>

    </>
  )
}

export default App
