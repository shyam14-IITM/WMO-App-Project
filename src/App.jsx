import { useState } from 'react'
import Home from "./Home.jsx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


function App() {
  
  useGSAP(()=>{          //adding entry animation
    gsap.from(".Calendar,.Tasks , nav",{
      y:50,
      duration:0.4,
      stagger:0.4,
      opacity:0,
      delay:0.5,
    
    })
    ;
    gsap.from(".Budget",{
      y:50,
      duration:0.4,
      stagger:0.4,
      opacity:0,
      delay:0.5,
      scrollTrigger:{
        scroller:"body",
        trigger:".container-2",
        markers:true,
        start:"top center",
        end:"top 40%"


      }
    
    })
    gsap.from("#head, .Nav a",{
      x:-50,
      opacity:0,
      duration:0.8,
      delay:0.5,
      stagger:0.3
    });

  })

  return (
    <>
     <Home></Home>       
    </>
  )
}

export default App
