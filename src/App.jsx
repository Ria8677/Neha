import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import arr from './assets/arrow.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="container">
     <div class="words">
      <div class="img">
       <img src={arr} height="80px" width="80px" class="center" />
      </div>
      <label class="label" id="top">Join Us</label>
      <label class="label">subscribe Easy Tutorial Youtube Channel to watch more videos</label>
      <button class="btn">About us</button>
    </div>
    <form action="">
    <div class="login">
     <label for="" class="reg">Register Here</label>
     <input type="text" class="id" placeholder="Name" />
     <input type="text" class="id" placeholder="Username" />
     <input type="email" class="id" placeholder="Email" />
     <input type="tel" class="id" placeholder="phone" pattern="[0-9]{1,2}-[0-9]{10}" />
     <input type="password" class="id" placeholder="Password" />
     <button class="btn2">Register</button>
    </div>
    </form>
  </div>  
    </>
  )
}

export default App
