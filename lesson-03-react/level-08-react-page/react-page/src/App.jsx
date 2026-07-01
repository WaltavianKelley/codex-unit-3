import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  

  return (
    <>

    <main className="main">
        <h1>
          Wiresless Gaming Headset
        </h1>

          <p>  This wireless gaming headset delivers clear sound, a comfortable fit,
        and a long-lasting battery, making it perfect for gaming, music, and
        watching movies. </p>

          <div className="images">
            <img src='https://plus.unsplash.com/premium_photo-1679513691474-73102089c117?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2lyZWxlc3MlMjBoZWFkcGhvbmVzfGVufDB8fDB8fHww'
             alt="Wireless Headphones" />

             <img src='https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwaGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D'
             alt="Gaming Headset"/>

             <img src='https://images.unsplash.com/photo-1583394838336-acd977736f90?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWRwaG9uZXN8ZW58MHx8MHx8fDA%3D'
             alt="Headphones" />
            
            </div> 
      </main>
    </>

    
  )
}

export default App
