import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Technologies from "./components/Technologies"
import { Suspense } from "react"
import Loading from "./components/Loading"

const dataPromise = async() =>{
  const res =  await fetch('/data.json')
   const data =  await res.json()
   return data;
}

const App = () =>{
  return  (
     <> 
     <div>
    <Navbar />
    <HeroSection/>
     <main>
   

    <Suspense fallback={<Loading/>}>
      <Technologies dataPromise = {dataPromise()}/>

    </Suspense>
     </main>
    <Footer/>
    </div>
  </>)
 }

 export default App