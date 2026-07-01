import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const message1 = "To create a react variable all you have to do is declare it with a const or let followed by an = and your follow up code or strings"
  const message2 = "To use a react variable you must go to your return after you create your variable and use a tag depending where you want the variable then type the variable in a curly bracket to use it."  

  return (
    <>


      <main>
        <h1>
          React Variables
        </h1>

          <p> {message1} </p>
          
          <p> {message2} </p>
      </main>

      </>
  )
}

export default App
