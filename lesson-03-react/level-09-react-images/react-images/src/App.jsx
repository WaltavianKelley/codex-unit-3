import './App.css'

import { dog } from "./assets/dog.jpg";
import cat from "./assets/cat.jpg";
import bat from "./assets/bat.jpg";

function App() {
  

  return (
    <>


      <main>
        <h1>
          React Images
        </h1>

          <p> Local images can be displayed in React by importing the image file into
        a variable and then using that variable as the value of the image's src
        attribute. </p>

        <img src={dog} alt={Dog} />
        <img src={cat} alt={Cat} />
        <img src={bat} alt={Bat} />
      </main>

      </>
  )
}

export default App
