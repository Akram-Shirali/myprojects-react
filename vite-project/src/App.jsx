import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  let heroData = [{text1:"Food 1" , text2:"this food is healthy."},{text1:"Food 2" , text2:"this food is good!!!!"},{text1:"Food 3" , text2:"this food is ......"},]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(()=>{
      setHeroCount((count)=>{return count===0?2:count+1})
    },3000)
  },[])
  
  return (
    <div>
      <Background heroCount={heroCount} playStatus={playStatus} />
      <Navbar />
      <Hero  setHeroCount={setHeroCount} setPlayStatus={setPlayStatus} heroCount={heroCount} playStatus={playStatus} heroData={heroData[heroCount]} />
    </div>
  )
}
export default App